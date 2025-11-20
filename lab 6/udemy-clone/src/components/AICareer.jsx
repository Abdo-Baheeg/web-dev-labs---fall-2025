import { aiCareerFeatures } from '../data/dummyData';
import './AICareer.css';

const AICareer = () => {
  return (
    <section className="ai-career">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>{aiCareerFeatures.title}</h2>
            <ul className="features-list">
              {aiCareerFeatures.features.map((feature) => (
                <li key={feature.id} className={feature.checked ? 'checked' : 'unchecked'}>
                  <span className="checkbox">{feature.checked ? '✓' : '☐'}</span>
                  {feature.text}
                </li>
              ))}
            </ul>
            <div className="pricing">
              <p className="price-text">
                Starting at <strong>{aiCareerFeatures.pricing.amount}/{aiCareerFeatures.pricing.period}</strong>
              </p>
              <button className="learn-more-btn">Learn more</button>
            </div>
          </div>
          <div className="image-content">
            <div className="placeholder-image">🎓</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICareer;
