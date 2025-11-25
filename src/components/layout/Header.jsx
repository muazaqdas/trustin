import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [showNav, setShowNav] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // const handleScroll = useCallback(() => {
  //   const currentScrollY = window.scrollY;

  //   // Always show nav at top of page
  //   if (currentScrollY < 100) {
  //     setShowNav(true);
  //   } else {
  //     // Show nav when scrolling up, hide when scrolling down
  //     if (currentScrollY < lastScrollY) {
  //       setShowNav(true);
  //     } else if (currentScrollY > lastScrollY) {
  //       setShowNav(false);
  //     }
  //   }

  //   setLastScrollY(currentScrollY);
  // }, [lastScrollY]);

  // useEffect(() => {
  //   let ticking = false;

  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(() => {
  //         handleScroll();
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener('scroll', onScroll);
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [handleScroll]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/process', label: 'Process' },
    { path: '/about', label: 'About Us' },
    { path: '/faq', label: 'FAQs' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="header">
      {/* Fixed Logo - Top Left */}
      <div className="header-fixed-logo">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="TrustIn Consultancy Logo" className="logo" />
        </Link>
      </div>

      {/* Sticky Navigation - Center */}
      <div className={`header-nav-sticky visible`}>
        <div className="container">
          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Fixed CTA Group - Top Right */}
      <div className="header-fixed-cta">
        <div className="language-selector-fixed">
          <span className="language-icon">🌐</span>
          <span className="language-text">EN</span>
        </div>
        <Link to="/contact">
          <Button variant="primary" size="md">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list-mobile">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link-mobile ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mobile-cta">
            <Link to="/contact">
              <Button variant="primary" size="md" fullWidth>
                Get Started
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
