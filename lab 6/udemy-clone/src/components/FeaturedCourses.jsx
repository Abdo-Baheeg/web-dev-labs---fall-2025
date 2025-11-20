import { featuredCourses } from '../data/dummyData';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
  return (
    <section className="featured-courses-section">
      <div className="featured-courses-container">
        <h2>Featured courses in Development</h2>
        <div className="courses-grid">
          {featuredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">{course.instructor}</p>
                <div className="course-rating">
                  <span className="rating-number">{course.rating}</span>
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="review-count">({course.reviewCount.toLocaleString()})</span>
                </div>
                <div className="course-price">
                  <span className="current-price">${course.price}</span>
                  <span className="original-price">${course.originalPrice}</span>
                </div>
                {course.bestseller && (
                  <div className="bestseller-badge">Bestseller</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
