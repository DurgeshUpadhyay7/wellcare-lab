import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          <div className={styles.brand}>
            <h3>Wellcare Pathology Laboratory</h3>
            <p className={styles.tagline}>A Place You Can Trust</p>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📍</span>
              <span>Matoshree Clinic, Behind Medplus Medical, Amdar Rode, Satara Parisar, Aurangabad 431010</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📞</span>
              <a href="tel:9420120226">9420120226</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>✉️</span>
              <a href="mailto:pavanbshinde23@gmail.com">pavanbshinde23@gmail.com</a>
            </div>
          </div>

          <div className={styles.quickActions}>
            <a href="tel:9420120226" className={styles.actionBtn}>
              📞 Call Now
            </a>
            <a 
              href="https://wa.me/919420120226" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.actionBtn}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>© 2025 Wellcare Pathology Laboratory. All rights reserved.</p>
            <p className={styles.madeWith}>Made with ❤️ for your health</p>
          </div>
        </div>

        {/* TechPotli Credit Section */}
        <div className={styles.techpotli}>
          <p className={styles.creditText}>Designed by</p>
          <a
            href="https://techpotli.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <img
              src="/New_Techpotli_Logo.png"
              alt="TechPotli"
              className={styles.logo}
            />
          </a>
        </div>
        
      </div>
    </footer>
  );
}