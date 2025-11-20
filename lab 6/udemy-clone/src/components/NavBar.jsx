import './NavBar.css';

const categories = [
  "Development",
  "Business",
  "Finance & Accounting",
  "IT & Software",
  "Office Productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Lifestyle",
  "Photography",
  "Health & Fitness",
  "Music"
];

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-scroll">
        {categories.map((c) => (
          <button key={c} className="nav-cat">{c}</button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
