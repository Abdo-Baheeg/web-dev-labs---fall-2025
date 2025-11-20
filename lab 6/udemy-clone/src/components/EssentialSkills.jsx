import { essentialSkills } from '../data/dummyData';
import './EssentialSkills.css';

const EssentialSkills = () => {
  return (
    <section className="essential-skills">
      <div className="container">
        <h2>Learn essential career and life skills</h2>
        <p className="subtitle">
          Udemy helps you build in-demand skills fast and advance your career in a changing job market.
        </p>
        <div className="skills-grid">
          {essentialSkills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssentialSkills;
