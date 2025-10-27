import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.section}>
          <h3 className={styles.title}>Attri Aroma</h3>
          <p className={styles.tagline}>मन को शुद्ध बना दे</p>
          <p className={styles.description}>
            Pure aromatic products from the spiritual land of Haridwar
          </p>
          <div className={styles.socialLinks}>
            <a 
              href="https://wa.me/8445536413" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              💬 WhatsApp
            </a>
            <a 
              href="tel:8445536413" 
              className={styles.socialLink}
            >
              📞 Call Now
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h4 className={styles.subtitle}>Quick Links</h4>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/products" className={styles.link}>Products</Link>
            <Link href="/about" className={styles.link}>About Us</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className={styles.section}>
          <h4 className={styles.subtitle}>Contact Info</h4>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span>8445536413</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <span>attriaromaharidwar@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🏠</span>
              <span>Prem Vihar Chowk, Haridwar</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🕘</span>
              <span>9AM - 7PM</span>
            </div>
          </div>
        </div>

        {/* TechPotli Credit Section */}
        <div className={styles.techpotli}>
          <p className={styles.creditText}>Website Designed by</p>
          <a
            href="https://techpotli.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <img
              src="/techpotli-logo.png" // Update this path to your TechPotli logo
              alt="TechPotli - Website Development Company"
              className={styles.logo}
            />
          </a>
          <p className={styles.techpotliTagline}>Creating Digital Excellence</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} Attri Aroma Haridwar. All rights reserved.</p>
          <p>Established: 22nd Sept 2025</p>
        </div>
      </div>
    </footer>
  )
}