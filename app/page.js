"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [goldenGlow, setGoldenGlow] = useState(false);
  
  const features = [
    "100% Accurate Report",
    "Report by Expertise", 
    "Patient Care Focus",
    "Trusted Laboratory"
  ];

  const fullText = "A Place You Can Trust";

  // Golden glow effect
  useEffect(() => {
    const glowInterval = setInterval(() => {
      setGoldenGlow(true);
      setTimeout(() => setGoldenGlow(false), 1000);
    }, 4000);
    return () => clearInterval(glowInterval);
  }, []);

  // Typing effect for tagline
  useEffect(() => {
    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [charIndex, fullText]);

  // Feature rotation and animations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
      setPulseAnimation(true);
      setTimeout(() => setPulseAnimation(false), 500);
    }, 3000);
    
    setIsVisible(true);
    
    return () => clearInterval(interval);
  }, []);

  const handleFeatureClick = (index) => {
    setCurrentFeature(index);
    setPulseAnimation(true);
    setTimeout(() => setPulseAnimation(false), 500);
  };

  const handleBookTest = () => {
    const message = "Hello Wellcare Pathology Laboratory, I would like to book a test.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919420120226?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFindLocation = () => {
    const address = "FIRST FLOOR MATOSHREE CLINIC BACKSIDE OF MEDPLUSS MEDICAL ANDAR RODE SATARA PARISAR AURANGABAD";
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section className={styles.home}>
      {/* Golden Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.floatingCircle1} ${styles.animatedCircle} ${styles.goldenCircle}`}></div>
        <div className={`${styles.floatingCircle2} ${styles.animatedCircle} ${styles.goldenCircle}`}></div>
        <div className={`${styles.floatingCircle3} ${styles.animatedCircle} ${styles.goldenCircle}`}></div>
        <div className={`${styles.particle1} ${styles.goldenParticle}`}></div>
        <div className={`${styles.particle2} ${styles.goldenParticle}`}></div>
        <div className={`${styles.particle3} ${styles.goldenParticle}`}></div>
        <div className={`${styles.particle4} ${styles.goldenParticle}`}></div>
        <div className={`${styles.particle5} ${styles.goldenParticle}`}></div>
      </div>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Enhanced Logo Section with Golden Effects */}
          <div className={`${styles.logoSection} ${isVisible ? styles.visible : ''}`}>
            <div 
              className={`${styles.logoContainer} ${isLogoHovered ? styles.logoHovered : ''} ${goldenGlow ? styles.goldenGlow : ''}`}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <div className={styles.logoAnimation}>
                <div className={styles.logoOrbit}>
                  <div className={`${styles.orbitDot1} ${styles.goldenDot}`}></div>
                  <div className={`${styles.orbitDot2} ${styles.goldenDot}`}></div>
                  <div className={`${styles.orbitDot3} ${styles.goldenDot}`}></div>
                </div>
              </div>
              
              <div className={styles.logoText}>
                <h1 className={styles.mainTitle}>
                  <span className={`${styles.primaryText} ${styles.textGlow} ${styles.goldenText}`}>
                    Wellcare
                    <div className={styles.titleUnderline}></div>
                  </span>
                  <span className={`${styles.secondaryText} ${styles.goldenSubtitle}`}>
                    Pathology Laboratory
                  </span>
                </h1>
                <div className={styles.taglineContainer}>
                  <p className={`${styles.tagline} ${styles.goldenTagline}`}>
                    {typedText}
                    <span className={styles.cursor}>|</span>
                  </p>
                </div>
              </div>

              {/* Golden Trust Badge */}
              <div className={`${styles.trustBadge} ${styles.goldenBadge}`}>
                <div className={styles.badgeIcon}>🏆</div>
                <span>Certified Excellence</span>
                <div className={styles.badgeShine}></div>
              </div>
            </div>
          </div>

          {/* Enhanced Features Section with Golden Accents */}
          <div className={`${styles.features} ${isVisible ? styles.visible : ''}`}>
            <div className={`${styles.featureItem} ${styles.goldenFeature}`}>
              <div className={`${styles.featureIcon} ${styles.heartbeat} ${styles.goldenIcon}`}>❤️</div>
              <span className={styles.goldenFeatureText}>Patient Care</span>
              <div className={styles.featureTooltip}>
                Dedicated to providing compassionate and personalized care
              </div>
            </div>
            
            <div className={styles.rotatingFeature}>
              <div className={`${styles.featureHighlight} ${styles.goldenHighlight}`}>
                <span className={styles.featureLabel}>WHY WELLCARE PATHOLOGY LABORATORY</span>
                <div className={styles.featureSelector}>
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      className={`${styles.featureDot} ${
                        index === currentFeature ? styles.active : ''
                      } ${styles.goldenDot}`}
                      onClick={() => handleFeatureClick(index)}
                    />
                  ))}
                </div>
                <div className={`${styles.featureText} ${pulseAnimation ? styles.pulse : ''} ${styles.goldenFeatureContent}`}>
                  <span className={styles.featureContent}>
                    {features[currentFeature]}
                  </span>
                  <div className={styles.featureProgress}>
                    <div 
                      className={`${styles.progressBar} ${styles.goldenProgress}`} 
                      key={currentFeature}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Stats Section with Golden Elements */}
          <div className={`${styles.stats} ${isVisible ? styles.visible : ''}`}>
            <div className={`${styles.statCard} ${styles.statInteractive} ${styles.goldenStat}`}>
              <div className={styles.statContent}>
                <div className={`${styles.statNumber} ${styles.goldenNumber}`}>100%</div>
                <div className={styles.statLabel}>Accurate Report</div>
                <div className={styles.statHoverInfo}>
                  <p>Quality assured results with double verification process</p>
                </div>
              </div>
              <div className={styles.statParticles}></div>
              <div className={styles.goldenGlowEffect}></div>
            </div>
            <div className={`${styles.statCard} ${styles.statInteractive} ${styles.goldenStat}`}>
              <div className={styles.statContent}>
                <div className={`${styles.statIcon} ${styles.goldenIcon}`}>👨‍⚕️</div>
                <div className={styles.statLabel}>Report by Expertise</div>
                <div className={styles.statHoverInfo}>
                  <p>Reviewed by certified pathologists and medical experts</p>
                </div>
              </div>
              <div className={styles.statParticles}></div>
              <div className={styles.goldenGlowEffect}></div>
            </div>
          </div>

          {/* Enhanced Address Section with Golden Touch */}
          <div className={`${styles.address} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.addressIcon}>
              📍
              <div className={`${styles.pulseRing} ${styles.goldenPulse}`}></div>
            </div>
            <div className={styles.addressText}>
              <div className={`${styles.addressMain} ${styles.goldenAddress}`}>
                FIRST FLOOR MATOSHREE CLINIC BACKSIDE OF MEDPLUSS MEDICAL
              </div>
              <div className={styles.addressDetail}>
                ANDAR RODE SATARA PARISAR AURANGABAD
              </div>
            </div>
            <button className={`${styles.directionsBtn} ${styles.goldenButton}`} onClick={handleFindLocation}>
              Get Directions ↗
            </button>
          </div>

          {/* Enhanced CTA Buttons with Golden Effects */}
          <div className={`${styles.ctaButtons} ${isVisible ? styles.visible : ''}`}>
            <button className={`${styles.primaryBtn} ${styles.btnEnhanced} ${styles.goldenPrimaryBtn}`} onClick={handleBookTest}>
              <span className={styles.btnContent}>
                <span className={styles.btnIcon}>🩺</span>
                Book a Test Now
              </span>
              <div className={styles.btnHoverEffect}></div>
              <div className={styles.btnRipple}></div>
              <div className={styles.goldenShine}></div>
            </button>
            <button className={`${styles.secondaryBtn} ${styles.btnEnhanced} ${styles.goldenSecondaryBtn}`} onClick={handleFindLocation}>
              <span className={styles.btnContent}>
                <span className={styles.btnIcon}>🗺️</span>
                Find Our Location
              </span>
              <div className={styles.btnHoverEffect}></div>
              <div className={styles.btnRipple}></div>
            </button>
          </div>
        </div>

        {/* Enhanced Hero Image Section with Golden Elements */}
        <div className={`${styles.heroImage} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.imageContainer}>
            <Image 
              src="/images/hero-image.jpg" 
              alt="Wellcare Pathology Laboratory - Trusted Diagnostic Services"
              width={600}
              height={400}
              priority
              className={styles.heroImg}
            />
            <div className={styles.imageOverlay}></div>
            
            {/* Golden Floating Elements */}
            <div className={`${styles.floatingBadge} ${styles.goldenFloatingBadge}`}>
              <div className={styles.badgeContent}>
                <span className={`${styles.badgeIcon} ${styles.goldenBadgeIcon}`}>🔬</span>
                <div className={styles.badgeText}>
                  <div>Trusted Since</div>
                  <div className={`${styles.badgeYear} ${styles.goldenYear}`}>2023</div>
                </div>
              </div>
              <div className={`${styles.badgeGlow} ${styles.goldenBadgeGlow}`}></div>
            </div>

            <div className={styles.imageHotspots}>
              <div className={`${styles.hotspot} ${styles.goldenHotspot}`} data-tooltip="Advanced Equipment">
                <div className={styles.hotspotDot}></div>
              </div>
              <div className={`${styles.hotspot} ${styles.goldenHotspot}`} data-tooltip="Certified Lab">
                <div className={styles.hotspotDot}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section with Golden Accents */}
      <div className={styles.statisticsSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.goldenSectionTitle}`}>Our Achievements</h2>
          <p className={styles.sectionSubtitle}>Trusted by thousands of patients for accurate diagnostics</p>
          <div className={styles.statsGrid}>
            <div className={`${styles.statItem} ${styles.goldenStatItem}`}>
              <div className={`${styles.statIcon} ${styles.goldenStatIcon}`}>🎯</div>
              <div className={`${styles.statNumber} ${styles.goldenStatNumber}`} data-count="5000">5000+</div>
              <div className={styles.statLabel}>Happy Patients</div>
              <div className={styles.statHoverGlow}></div>
            </div>
            <div className={`${styles.statItem} ${styles.goldenStatItem}`}>
              <div className={`${styles.statIcon} ${styles.goldenStatIcon}`}>📊</div>
              <div className={`${styles.statNumber} ${styles.goldenStatNumber}`} data-count="99.8">99.8%</div>
              <div className={styles.statLabel}>Accuracy Rate</div>
              <div className={styles.statHoverGlow}></div>
            </div>
            <div className={`${styles.statItem} ${styles.goldenStatItem}`}>
              <div className={`${styles.statIcon} ${styles.goldenStatIcon}`}>🧪</div>
              <div className={`${styles.statNumber} ${styles.goldenStatNumber}`} data-count="50">50+</div>
              <div className={styles.statLabel}>Tests Available</div>
              <div className={styles.statHoverGlow}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Services Section with Golden Highlights */}
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.goldenSectionTitle}`}>Our Diagnostic Services</h2>
          <p className={styles.sectionSubtitle}>Comprehensive range of pathology tests with accurate results</p>
          <div className={styles.servicesGrid}>
            <div className={`${styles.serviceCard} ${styles.goldenServiceCard}`}>
              <div className={`${styles.serviceIcon} ${styles.goldenServiceIcon}`}>🩸</div>
              <h3 className={styles.goldenServiceTitle}>Blood Tests</h3>
              <p>Complete Blood Count, Sugar Levels, Cholesterol, Thyroid Function, and more</p>
              <ul className={styles.serviceList}>
                <li className={styles.goldenServiceItem}>Complete Hemogram</li>
                <li className={styles.goldenServiceItem}>Blood Sugar Tests</li>
                <li className={styles.goldenServiceItem}>Lipid Profile</li>
                <li className={styles.goldenServiceItem}>Liver Function Test</li>
              </ul>
              <div className={styles.serviceHoverGlow}></div>
            </div>
            <div className={`${styles.serviceCard} ${styles.goldenServiceCard}`}>
              <div className={`${styles.serviceIcon} ${styles.goldenServiceIcon}`}>🧪</div>
              <h3 className={styles.goldenServiceTitle}>Urine Tests</h3>
              <p>Complete urine analysis for various health conditions and screenings</p>
              <ul className={styles.serviceList}>
                <li className={styles.goldenServiceItem}>Routine Urine Analysis</li>
                <li className={styles.goldenServiceItem}>Urine Culture</li>
                <li className={styles.goldenServiceItem}>Pregnancy Test</li>
                <li className={styles.goldenServiceItem}>Drug Screening</li>
              </ul>
              <div className={styles.serviceHoverGlow}></div>
            </div>
            <div className={`${styles.serviceCard} ${styles.goldenServiceCard}`}>
              <div className={`${styles.serviceIcon} ${styles.goldenServiceIcon}`}>🦠</div>
              <h3 className={styles.goldenServiceTitle}>Pathology Tests</h3>
              <p>Advanced pathological examinations for accurate diagnosis</p>
              <ul className={styles.serviceList}>
                <li className={styles.goldenServiceItem}>Biopsy Services</li>
                <li className={styles.goldenServiceItem}>Cytology Tests</li>
                <li className={styles.goldenServiceItem}>Histopathology</li>
                <li className={styles.goldenServiceItem}>Cancer Screening</li>
              </ul>
              <div className={styles.serviceHoverGlow}></div>
            </div>
            <div className={`${styles.serviceCard} ${styles.goldenServiceCard}`}>
              <div className={`${styles.serviceIcon} ${styles.goldenServiceIcon}`}>🧬</div>
              <h3 className={styles.goldenServiceTitle}>Special Tests</h3>
              <p>Specialized tests for comprehensive health assessment</p>
              <ul className={styles.serviceList}>
                <li className={styles.goldenServiceItem}>Hormonal Assays</li>
                <li className={styles.goldenServiceItem}>Vitamin Tests</li>
                <li className={styles.goldenServiceItem}>Allergy Tests</li>
                <li className={styles.goldenServiceItem}>Genetic Markers</li>
              </ul>
              <div className={styles.serviceHoverGlow}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Section with Golden Elements */}
      <div className={styles.quickInfo}>
        <div className={`${styles.infoCard} ${styles.goldenInfoCard}`}>
          <div className={`${styles.infoIcon} ${styles.goldenInfoIcon}`}>⏰</div>
          <h3 className={styles.goldenInfoTitle}>24/7 Services</h3>
          <p>Round the clock diagnostic services</p>
          <div className={styles.cardHover}></div>
          <div className={styles.goldenInfoGlow}></div>
        </div>
        <div className={`${styles.infoCard} ${styles.goldenInfoCard}`}>
          <div className={`${styles.infoIcon} ${styles.goldenInfoIcon}`}>🏠</div>
          <h3 className={styles.goldenInfoTitle}>Home Collection</h3>
          <p>Free sample collection at home</p>
          <div className={styles.cardHover}></div>
          <div className={styles.goldenInfoGlow}></div>
        </div>
        <div className={`${styles.infoCard} ${styles.goldenInfoCard}`}>
          <div className={`${styles.infoIcon} ${styles.goldenInfoIcon}`}>📱</div>
          <h3 className={styles.goldenInfoTitle}>Digital Reports</h3>
          <p>Get reports on WhatsApp & Email</p>
          <div className={styles.cardHover}></div>
          <div className={styles.goldenInfoGlow}></div>
        </div>
      </div>

      {/* Golden Floating WhatsApp Button */}
      <div className={`${styles.whatsappFloat} ${styles.goldenWhatsappFloat}`}>
        <a href="https://wa.me/919420120226" target="_blank" rel="noopener noreferrer">
          <span className={styles.whatsappIcon}>💬</span>
          WhatsApp
          <div className={styles.whatsappPulse}></div>
        </a>
      </div>
    </section>
  );
}