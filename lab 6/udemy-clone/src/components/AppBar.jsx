import './AppBar.css';
import udemyLogo from '../assets/udemy-logo.svg';

const AppBar = () => {
  return (
    <nav className="app-bar">
      <div className="app-bar-container">
        <div className="app-bar-left">
          <img src={udemyLogo} alt="Udemy" className="logo" />
          <button className="nav-btn">Explore</button>
          <div className="search-bar">
            <input type="text" placeholder="Search for anything" />
          </div>
        </div>
        <div className="app-bar-right">
          <a href="#" className="nav-link">Plans & Pricing</a>
          <a href="#" className="nav-link">Udemy Business</a>
          <a href="#" className="nav-link">Teach on Udemy</a>
          <button className="btn-login">Log in</button>
          <button className="btn-signup">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;