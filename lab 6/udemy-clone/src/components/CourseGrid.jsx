import { useState } from 'react';
import './CourseGrid.css';
import { courses, courseCategories } from '../data/dummyData';

const CourseCard = ({ course }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    return stars.join('');
  };

  return (
    <div className="course-card">
      <div className="thumb">
        <img src={course.thumbnail} alt={course.title} />
        {course.isBestseller && <div className="bestseller">Bestseller</div>}
      </div>
      <div className="card-body">
        <h3 className="course-title">{course.title}</h3>
        <p className="instructor">{course.instructor}</p>
        <div className="rating-row">
          <span className="rating">{course.rating}</span>
          <span className="stars">{renderStars(course.rating)}</span>
          <span className="num-ratings">({course.numRatings.toLocaleString()})</span>
        </div>
        <div className="price-row">
          <span className="price">E£{course.price}</span>
          <span className="orig">E£{course.originalPrice}</span>
        </div>
      </div>
    </div>
  );
};

const CourseGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState(courseCategories[0]);

  const filteredCourses = courses.filter((course) => 
    course.category === selectedCategory
  );

  return (
    <section className="course-grid-section">
      <div className="container">
        <h2>Skills to transform your career and life</h2>

        <div className="filter-row">
          {courseCategories.map((category) => (
            <button 
              key={category} 
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`} 
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
