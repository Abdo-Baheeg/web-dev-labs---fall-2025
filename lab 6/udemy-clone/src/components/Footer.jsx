import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="copyright">© {new Date().getFullYear()} Udemy, Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
