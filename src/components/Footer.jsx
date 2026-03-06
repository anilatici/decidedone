import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <Logo size={24} />
            </Link>
            <p className="tagline">One answer. One step.</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Platform</h4>
              <Link to="/">Home</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/science">Science</Link>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="link-group">
              <h4>Social</h4>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-separator"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Decided. Built to reduce cognitive load, not add to it.
          </p>
          <div className="citation-strip mono">
            <span>Danziger et al. (2011), PNAS</span>
            <span>Sollisch (2016) cited in PMC/NCBI</span>
            <span>Wansink & Sobal (2007), Cornell University</span>
            <span>Iyengar & Lepper (2000), Columbia University</span>
            <span>Vohs et al. (2008)</span>
            <span>Global Council for Behavioral Science (2025)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
