"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active link based on route
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') setActiveLink('home');
    else if (path === '/about') setActiveLink('about');
    else if (path === '/branches') setActiveLink('branches');
    else if (path === '/contact') setActiveLink('contact');
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Hello Wellcare Pathology Laboratory, I would like to book a test.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919420120226?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const navLinks = [
    { id: 'home', label: 'Home', href: '/', icon: '🏠' },
    { id: 'about', label: 'About', href: '/about', icon: 'ℹ️' },
    { id: 'branches', label: 'Branches', href: '/branches', icon: '🏢' },
    { id: 'contact', label: 'Contact', href: '/contact', icon: '📞' }
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo - Same as before */}
        <Link 
          href="/" 
          className={styles.logo}
          onMouseEnter={() => setHoveredLink('logo')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <div className={styles.logoContent}>
            <div className={styles.logoImageWrapper}>
              <div className={styles.logoImageContainer}>
                <Image 
                  src="/images/logo.png" 
                  alt="Wellcare Pathology Laboratory"
                  width={50}
                  height={50}
                  className={styles.logoImage}
                  priority
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className={styles.logoFallback}>
                  <span className={styles.fallbackIcon}>🔬</span>
                </div>
              </div>
              <div className={styles.logoGlow}></div>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>Wellcare</span>
              <span className={styles.logoSub}>Pathology Laboratory</span>
            </div>
            <div className={styles.logoHoverEffect}></div>
          </div>
        </Link>

        {/* Enhanced Navigation Links with Icons */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link 
              key={link.id}
              href={link.href} 
              className={`${styles.navLink} ${activeLink === link.id ? styles.active : ''} ${hoveredLink === link.id ? styles.hovered : ''}`}
              onClick={() => {
                setActiveLink(link.id);
                setIsMobileMenuOpen(false);
              }}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className={styles.linkIcon}>{link.icon}</span>
              <span className={styles.linkText}>{link.label}</span>
              <div className={styles.linkUnderline}></div>
              <div className={styles.linkHoverEffect}></div>
              <div className={styles.activeIndicator}></div>
            </Link>
          ))}
        </div>

        {/* CTA Button with WhatsApp */}
        <button 
          className={styles.ctaButton}
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setHoveredLink('cta')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <span className={styles.ctaIcon}>🩺</span>
          <span className={styles.ctaText}>Book Test</span>
          <div className={styles.ctaHoverEffect}></div>
          <div className={styles.ctaPulse}></div>
        </button>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`${styles.menuLine} ${isMobileMenuOpen ? styles.line1 : ''}`}></span>
          <span className={`${styles.menuLine} ${isMobileMenuOpen ? styles.line2 : ''}`}></span>
          <span className={`${styles.menuLine} ${isMobileMenuOpen ? styles.line3 : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileMenuContent}>
            {navLinks.map((link) => (
              <Link 
                key={link.id}
                href={link.href} 
                className={`${styles.mobileNavLink} ${activeLink === link.id ? styles.active : ''}`}
                onClick={() => {
                  setActiveLink(link.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className={styles.mobileLinkIcon}>{link.icon}</span>
                <span className={styles.mobileLinkText}>{link.label}</span>
                <div className={styles.mobileLinkIndicator}></div>
              </Link>
            ))}
            
            <button 
              className={styles.mobileCtaButton}
              onClick={() => {
                handleWhatsAppClick();
                setIsMobileMenuOpen(false);
              }}
            >
              <span className={styles.mobileCtaIcon}>📱</span>
              Book Test via WhatsApp
            </button>
          </div>
          
          <div className={styles.mobileMenuBackdrop} onClick={() => setIsMobileMenuOpen(false)}></div>
        </div>
      </div>

      {/* Navigation Progress Bar */}
      <div className={styles.navProgress}>
        <div 
          className={styles.progressBar} 
          style={{
            width: `${(navLinks.findIndex(link => link.id === activeLink) + 1) * 25}%`
          }}
        ></div>
      </div>
    </nav>
  );
}