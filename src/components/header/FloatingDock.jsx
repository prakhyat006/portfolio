import React, { useState, useEffect } from 'react';
import './FloatingDock.css';

const navItems = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Services', href: '#services' },
  { title: 'Projects', href: '#work' },
  { title: 'Contact', href: '#contact' },
];

const HamburgerIcon = ({ open, onClick }) => (
  <button
    className={`hamburger${open ? ' open' : ''}`}
    onClick={e => {
      e.preventDefault();
      onClick();
      if (document.activeElement) document.activeElement.blur();
    }}
    aria-label="Toggle menu"
  >
    <span />
    <span />
    <span />
  </button>
);

const FloatingDock = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="floating-dock floating-dock--desktop">
        {navItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="floating-dock__item"
            onClick={e => handleSmoothScroll(e, item.href)}
          >
            {item.title}
          </a>
        ))}
      </nav>
      <div className="floating-dock--mobile">
        <HamburgerIcon open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        {menuOpen && (
          <div className="floating-dock__dropdown">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="floating-dock__item"
                onClick={e => handleSmoothScroll(e, item.href)}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingDock; 