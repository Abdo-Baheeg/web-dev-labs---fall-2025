import { trustedCompanies } from '../data/dummyData';
import './TrustedCompanies.css';

const TrustedCompanies = () => {
  return (
    <section className="trusted-companies-section">
      <div className="trusted-companies-container">
        <h2>Trusted by over 17,000 companies and millions of learners around the world</h2>
        <div className="companies-logos">
          {trustedCompanies.map((company) => (
            <div key={company.id} className="company-logo">
              <span>{company.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
