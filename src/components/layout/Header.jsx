import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdLanguage } from 'react-icons/md';
import { RiCloseLargeFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, language, setLanguagePreference } = useTranslation();

  // Language options
  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangDropdownOpen(false);
  }, [location]);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle language selection
  const handleLanguageSelect = (langCode) => {
    setLanguagePreference(langCode);
    setIsLangDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangDropdownOpen && !event.target.closest('.language-selector-fixed') && !event.target.closest('.language-selector-mobile')) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangDropdownOpen]);

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

  // Get navigation links from translation
  const navLinks = t.layoutContent.headerNav.navLinks;

  return (
    <header className="header">
      {/* Fixed Logo - Top Left */}
      <div className="header-fixed-logo">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt={t.layoutContent.headerNav.logoAlt} className="logo" />
        </Link>
      </div>

      {/* Sticky Navigation - Center */}
      <div
        className={`header-nav-sticky visible`}
        style={isMobileMenuOpen ? {backdropFilter: "blur(16px)"} : {}}
      >
        <div className="">
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
            aria-label={t.layoutContent.footerContent.ariaLabels.mobileMenu}
          >
            {isMobileMenuOpen? <RiCloseLargeFill size={25}/>:<RxHamburgerMenu size={25} />}
          </button>
        </div>
      </div>

      {/* Fixed CTA Group - Top Right */}
      <div className="header-fixed-cta">
        <div className="language-selector-wrapper">
          <div
            className="language-selector-fixed"
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            {/* <span className="language-icon"><MdLanguage /></span> */}
            <span className="language-text">{currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}</span>

            {/* Language Dropdown */}
            {isLangDropdownOpen && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`language-option ${language === lang.code ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLanguageSelect(lang.code);
                    }}
                  >
                    <span className="lang-flag">{lang.flag}</span>
                    <span className="lang-label">{lang.label}</span>
                    {language === lang.code && <span className="lang-check">✓</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Link to="/contact">
          <Button variant="primary" size="md">
            {t.layoutContent.headerNav.ctaButton}
          </Button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className='nav-mobile-header'>
          <div className="header-fixed-logo">
            <Link to="/" className="logo-link">
              <img src="/logo.png" alt={t.layoutContent.headerNav.logoAlt} className="logo" />
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t.layoutContent.footerContent.ariaLabels.mobileMenu}
          >
            {isMobileMenuOpen? <RiCloseLargeFill size={25}/>:<RxHamburgerMenu size={25} />}
          </button>
        </div>
        <ul className="nav-list-mobile">
          {/* Language Selector - Mobile Only */}
          <li className="mobile-language">
            <div className="language-selector-wrapper-mobile">
              <div
                className="language-selector-mobile"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                style={{ cursor: 'pointer', position: 'relative' }}
              >
                {/* <span className="language-icon"><MdLanguage /></span> */}
                <span className="language-text">{currentLanguage?.flag} {currentLanguage?.label}</span>

                {/* Language Dropdown - Mobile */}
                {isLangDropdownOpen && (
                  <div className="language-dropdown language-dropdown-mobile">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        className={`language-option ${language === lang.code ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLanguageSelect(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <span className="lang-flag">{lang.flag}</span>
                        <span className="lang-label">{lang.label}</span>
                        {language === lang.code && <span className="lang-check">✓</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </li>

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
                {t.layoutContent.headerNav.ctaButton}
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
