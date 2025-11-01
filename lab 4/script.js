// ==================== Task Class ====================
// Represents a single task with all its properties
class Task {
    constructor(description, id = null, completed = false, timestamp = null) {
        this.id = id || Date.now(); // Unique identifier
        this.description = description;
        this.completed = completed;
        this.timestamp = timestamp || new Date().toISOString();
    }

    // Toggle completion status
    toggle() {
        this.completed = !this.completed;
    }

    // Update task description
    updateDescription(newDescription) {
        this.description = newDescription;
    }

    // Get formatted timestamp for display
    getFormattedTime() {
        const date = new Date(this.timestamp);
        const now = new Date();
        const diffInMs = now - date;
        const diffInMins = Math.floor(diffInMs / 60000);
        const diffInHours = Math.floor(diffInMs / 3600000);
        const diffInDays = Math.floor(diffInMs / 86400000);

        if (diffInMins < 1) return 'Just now';
        if (diffInMins < 60) return `${diffInMins} min ago`;
        if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
        if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
        
        return date.toLocaleDateString();
    }

    // Convert to plain object for storage
    toJSON() {
        return {
            id: this.id,
            description: this.description,
            completed: this.completed,
            timestamp: this.timestamp
        };
    }
}


class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.currentSort = 'time';
        this.loadFromLocalStorage();
    }

    // ===== Core Task Operations =====
    
    addTask(description) {
        if (!description.trim()) return null;
        
        const task = new Task(description.trim());
        this.tasks.push(task);
        this.saveToLocalStorage();
        return task;
    }

    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            this.saveToLocalStorage();
            return true;
        }
        return false;
    }

    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.toggle();
            this.saveToLocalStorage();
            return task;
        }
        return null;
    }

    updateTask(id, newDescription) {
        const task = this.tasks.find(task => task.id === id);
        if (task && newDescription.trim()) {
            task.updateDescription(newDescription.trim());
            this.saveToLocalStorage();
            return task;
        }
        return null;
    }

    // ===== Filtering =====
    
    setFilter(filter) {
        this.currentFilter = filter;
    }

    getFilteredTasks() {
        switch(this.currentFilter) {
            case 'completed':
                return this.tasks.filter(task => task.completed);
            case 'incomplete':
                return this.tasks.filter(task => !task.completed);
            default:
                return this.tasks;
        }
    }

    // ===== Sorting =====
    
    setSort(sortType) {
        this.currentSort = sortType;
    }

    getSortedTasks(tasks) {
        const tasksCopy = [...tasks];
        
        switch(this.currentSort) {
            case 'alpha':
                return tasksCopy.sort((a, b) => 
                    a.description.toLowerCase().localeCompare(b.description.toLowerCase())
                );
            case 'time':
            default:
                return tasksCopy.sort((a, b) => 
                    new Date(b.timestamp) - new Date(a.timestamp)
                );
        }
    }

    getTasks() {
        const filtered = this.getFilteredTasks();
        return this.getSortedTasks(filtered);
    }

    // ===== Statistics =====
    
    getStats() {
        return {
            total: this.tasks.length,
            completed: this.tasks.filter(task => task.completed).length,
            incomplete: this.tasks.filter(task => !task.completed).length
        };
    }

    // ===== LocalStorage Persistence =====
    
    saveToLocalStorage() {
        const data = this.tasks.map(task => task.toJSON());
        localStorage.setItem('proTodoTasks', JSON.stringify(data));
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('proTodoTasks');
        if (data) {
            try {
                const parsed = JSON.parse(data);
                this.tasks = parsed.map(taskData => 
                    new Task(
                        taskData.description,
                        taskData.id,
                        taskData.completed,
                        taskData.timestamp
                    )
                );
            } catch (error) {
                console.error('Error loading tasks from localStorage:', error);
                this.tasks = [];
            }
        }
    }

    clearAll() {
        this.tasks = [];
        this.saveToLocalStorage();
    }
}

// ==================== View/Controller ====================
// Handles UI updates and user interactions

class TodoApp {
    constructor() {
        this.taskManager = new TaskManager();
        this.editingTaskId = null;
        
        // DOM elements
        this.taskInput = document.getElementById('taskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.taskList = document.getElementById('taskList');
        this.emptyState = document.getElementById('emptyState');
        this.totalTasksEl = document.getElementById('totalTasks');
        this.completedTasksEl = document.getElementById('completedTasks');
        
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.sortBtns = document.querySelectorAll('.sort-btn');
        
        this.initEventListeners();
        this.render();
    }

    initEventListeners() {
        // Add task
        this.addTaskBtn.addEventListener('click', () => this.handleAddTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleAddTask();
        });

        // Filter buttons
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e.target.dataset.filter));
        });

        // Sort buttons
        this.sortBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleSort(e.target.dataset.sort));
        });
    }

    handleAddTask() {
        const description = this.taskInput.value;
        const task = this.taskManager.addTask(description);
        
        if (task) {
            this.taskInput.value = '';
            this.showSuccessAnimation();
            this.render();
            this.taskInput.focus();
        }
    }

    showSuccessAnimation() {
        const button = this.addTaskBtn;
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 200);
    }

    handleToggleTask(id) {
        const taskElement = document.querySelector(`[data-task-id="${id}"]`);
        const task = this.taskManager.toggleTask(id);
        
        // Add completion animation
        if (task && task.completed) {
            this.createCompletionEffect(taskElement);
        }
        
        this.render();
    }

    // Create particle effect when task is completed
    createCompletionEffect(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Create multiple particles
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'completion-particle';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            
            const angle = (Math.PI * 2 * i) / 12;
            const velocity = 50 + Math.random() * 50;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
        }
    }

    handleDeleteTask(id) {
        const taskElement = document.querySelector(`[data-task-id="${id}"]`);
        if (taskElement) {
            taskElement.classList.add('deleting');
            setTimeout(() => {
                this.taskManager.deleteTask(id);
                this.render();
            }, 300);
        }
    }

    handleEditTask(id) {
        this.editingTaskId = id;
        this.render();
        
        // Focus the edit input
        setTimeout(() => {
            const editInput = document.querySelector('.edit-input');
            if (editInput) {
                editInput.focus();
                editInput.select();
            }
        }, 0);
    }

    handleSaveEdit(id, newDescription) {
        if (newDescription) {
            this.taskManager.updateTask(id, newDescription);
        }
        this.editingTaskId = null;
        this.render();
    }

    handleFilter(filter) {
        this.taskManager.setFilter(filter);
        
        // Update active button
        this.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        this.render();
    }

    handleSort(sortType) {
        this.taskManager.setSort(sortType);
        this.render();
    }

    createTaskElement(task) {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.setAttribute('data-task-id', task.id);

        if (this.editingTaskId === task.id) {
            // Edit mode
            li.classList.add('editing');
            li.innerHTML = `
                <input 
                    type="text" 
                    class="edit-input" 
                    value="${task.description}"
                >
                <div class="task-actions">
                    <button class="task-btn save-btn" title="Save">✅</button>
                    <button class="task-btn cancel-btn" title="Cancel">❌</button>
                </div>
            `;

            const editInput = li.querySelector('.edit-input');
            const saveBtn = li.querySelector('.save-btn');
            const cancelBtn = li.querySelector('.cancel-btn');

            saveBtn.addEventListener('click', () => {
                this.handleSaveEdit(task.id, editInput.value);
            });

            cancelBtn.addEventListener('click', () => {
                this.editingTaskId = null;
                this.render();
            });

            editInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleSaveEdit(task.id, editInput.value);
                }
            });

            editInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.editingTaskId = null;
                    this.render();
                }
            });
        } else {
            // Normal mode
            li.innerHTML = `
                <div class="task-content">
                    <div class="task-text">${task.description}</div>
                    <div class="task-timestamp">${task.getFormattedTime()}</div>
                </div>
                <div class="task-actions">
                    <button class="task-btn edit-btn" title="Edit">✏️</button>
                    <button class="task-btn delete-btn" title="Delete">❌</button>
                </div>
            `;

            const taskContent = li.querySelector('.task-content');
            const editBtn = li.querySelector('.edit-btn');
            const deleteBtn = li.querySelector('.delete-btn');

            taskContent.addEventListener('click', () => this.handleToggleTask(task.id));
            editBtn.addEventListener('click', () => this.handleEditTask(task.id));
            deleteBtn.addEventListener('click', () => this.handleDeleteTask(task.id));
        }

        return li;
    }

    updateStats() {
        const stats = this.taskManager.getStats();
        this.totalTasksEl.textContent = `${stats.total} task${stats.total !== 1 ? 's' : ''}`;
        this.completedTasksEl.textContent = `${stats.completed} completed`;
    }

    render() {
        const tasks = this.taskManager.getTasks();
        
        // Clear task list
        this.taskList.innerHTML = '';
        
        // Show/hide empty state
        if (tasks.length === 0) {
            this.emptyState.classList.remove('hidden');
        } else {
            this.emptyState.classList.add('hidden');
            
            // Render tasks
            tasks.forEach(task => {
                const taskElement = this.createTaskElement(task);
                this.taskList.appendChild(taskElement);
            });
        }
        
        // Update statistics
        this.updateStats();
    }
}

// ==================== Initialize App ====================
// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
