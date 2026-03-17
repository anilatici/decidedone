import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isLegalPage = location.pathname === '/terms' || location.pathname === '/privacy';

  const navLinks = [
    { name: 'The Problem', path: '/#problem' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Science', path: '/science' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setMobileMenuOpen(false)}>
          <Logo size={28} />
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links">
          {isLegalPage ? (
            <Link to="/" className="btn-pill btn-ghost-accent nav-legal-link">
              Back to Home
            </Link>
          ) : (
            <>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              ))}
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {isLegalPage ? (
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Back to Home
            </Link>
          ) : (
            <>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </>
          )}
        </div>
      </div>

    </nav>
  );
};

export default Navigation;
