import './AppBar.css';

const AppBar = () => {
  return (
    <nav className="app-bar">
      <div className="app-bar-container">
        <div className="app-bar-left">
          <div className="logo">Udemy</div>
          <button className="categories-btn">Categories</button>
          <div className="search-bar">
            <input type="text" placeholder="Search for anything" />
            <span className="search-icon">🔍</span>
          </div>
        </div>
        <div className="app-bar-right">
          <a href="#" className="nav-link">Teach on Udemy</a>
          <button className="cart-btn">🛒</button>
          <button className="btn-login">Log in</button>
          <button className="btn-signup">Sign up</button>
          <button className="language-btn">🌐</button>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;