const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = null;
let fullExpression = '';

function init() {
    buttons.forEach(button => {
        button.addEventListener('click', () => handleButtonClick(button));
    });
}


function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) {
        alert("Error: Division by zero");
        return null;
    }
    return a / b;
}

// Handle buttons
function handleButtonClick(button) {
    const value = button.textContent.trim();
    const id = button.id;

    if (button.classList.contains('number')) {
        handleNumber(value);
    } else if (button.classList.contains('operator')) {
        handleOperator(value, id);
    } else if (button.classList.contains('function')) {
        handleFunction(id);
    }
}

// Handle numbers
function handleNumber(value) {
    currentInput = (currentInput === '0' || currentInput === '') ? value : currentInput + value;

    if (operator && previousInput !== '') {
        fullExpression = `${previousInput} ${operator} ${currentInput}`;
    } else {
        fullExpression = currentInput;
    }

    display.textContent = fullExpression;
}

// Handle operator
function handleOperator(value, id) {
    if (id === 'btn-equals') {
        calculate();
        return;
    }

    if (currentInput !== '') {
        if (previousInput !== '' && operator) {
            calculate();
        }

        previousInput = currentInput;
        currentInput = '';
        operator = value;
        fullExpression = `${previousInput} ${operator}`;
        display.textContent = fullExpression;
    }
}

// Handle functions
function handleFunction(id) {
    if (id === 'btn-ac') {
        clear();
    } else if (id === 'btn-toggle') {
        toggleSign();
    } else if (id === 'btn-percent') {
        applyPercent();
    }
}

function calculate() {
    if (!previousInput || !currentInput || !operator) return;

    const a = parseFloat(previousInput);
    const b = parseFloat(currentInput);
    let result = null;

    switch (operator) {
        case '+': result = add(a, b); break;
        case '−': result = subtract(a, b); break;
        case '×': result = multiply(a, b); break;
        case '÷': result = divide(a, b); break;
    }

    if (result === null || isNaN(result)) return;

    fullExpression = `${previousInput} ${operator} ${currentInput} = ${result}`;
    currentInput = result.toString();
    previousInput = '';
    operator = null;
    display.textContent = fullExpression;
}

function clear() {
    currentInput = '';
    previousInput = '';
    operator = null;
    fullExpression = '';
    display.textContent = '0';
}


function toggleSign() {
}

function applyPercent() {
    if (!currentInput) return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function updateDisplay() {
    if (operator && previousInput) {
        display.textContent = `${previousInput} ${operator} ${currentInput}`;
    } else {
        display.textContent = currentInput || '0';
    }
}

document.addEventListener('DOMContentLoaded', init);
