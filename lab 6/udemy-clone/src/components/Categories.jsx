import { categories } from '../data/dummyData';
import './Categories.css';

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="categories-container">
        <h2>Top categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
