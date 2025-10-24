"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    testType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const animationRefs = useRef([]);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const fullText = "Get In Touch";

  // Initialize component
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
      // Cleanup all intervals and timeouts
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Safe typing effect
  useEffect(() => {
    if (!mounted) return;
    
    if (charIndex < fullText.length) {
      timeoutRef.current = setTimeout(() => {
        setTypingText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    }
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, fullText, mounted]);

  const testTypes = [
    "Blood Test",
    "Urine Test", 
    "Pathology Test",
    "Special Test",
    "Other"
  ];

  const handleChange = (e) => {
    if (!mounted) return;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName) => {
    if (!mounted) return;
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    if (!mounted) return;
    setActiveField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mounted || isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Safe form submission with cleanup
    timeoutRef.current = setTimeout(() => {
      if (!mounted) return;
      
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Show WhatsApp option after 1 second
      timeoutRef.current = setTimeout(() => {
        if (!mounted) return;
        setShowWhatsApp(true);
      }, 1000);
      
    }, 2000);
  };

  const handleWhatsAppRedirect = () => {
    if (!mounted) return;
    
    const message = `Hello Wellcare Pathology Laboratory,\n\nI would like to get more information about your services.\n\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nTest Type: ${formData.testType || 'Not specified'}\nMessage: ${formData.message || 'No message'}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919420120226?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setShowWhatsApp(false);
    setSubmitStatus(null);
  };

  const handleQuickAction = (action) => {
    if (!mounted) return;
    
    const messages = {
      "Book a Test": "Hello, I would like to book a test at Wellcare Pathology Laboratory.",
      "Request Home Collection": "Hello, I would like to request home collection service for my tests.",
      "Report Query": "Hello, I have a query regarding my test report from Wellcare Pathology Laboratory."
    };

    const message = messages[action];
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919420120226?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Main Branch",
      content: "Matoshree Clinic, Behind Medplus Medical, Amdar Rode, Satara Parisar, Aurangabad - 431010",
      link: "https://maps.google.com/?q=Matoshree+Clinic+Behind+Medplus+Medical+Amdar+Rode+Satara+Parisar+Aurangabad",
      animation: "bounce"
    },
    {
      icon: "📞",
      title: "Phone",
      content: "+91 94201 20226",
      link: "tel:+919420120226",
      animation: "pulse"
    },
    {
      icon: "✉️",
      title: "Email",
      content: "pavanbshinde23@gmail.com",
      link: "mailto:pavanbshinde23@gmail.com",
      animation: "wiggle"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      content: "Chat with us instantly",
      link: "https://wa.me/919420120226",
      animation: "shake"
    }
  ];

  // Safe animation handlers
  const handleCardHover = (index, isHovering) => {
    if (!mounted) return;
    const card = animationRefs.current[index];
    if (card) {
      if (isHovering) {
        card.classList.add(styles.hovered);
      } else {
        card.classList.remove(styles.hovered);
      }
    }
  };

  if (!mounted) {
    return (
      <section className={styles.contact}>
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contact}>
      {/* Simplified Animated Background */}
      <div className={styles.animatedBackground}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
      </div>

      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.title}>
          {typingText}
          <span className={styles.cursor}>|</span>
        </h1>
        <p className={styles.subtitle}>
          We're here to help you with any queries or test bookings. 
          Reach out to us for comprehensive pathology services.
        </p>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.container}>
        {/* Contact Information */}
        <div className={styles.infoSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <p className={styles.sectionSubtitle}>
              Feel free to reach out through any of these channels
            </p>
          </div>
          
          <div className={styles.infoCards}>
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                ref={el => animationRefs.current[index] = el}
                className={`${styles.infoCard} ${styles[item.animation]}`}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              >
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>{item.icon}</div>
                </div>
                <div className={styles.infoContent}>
                  <h3>{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className={styles.clickable} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!mounted) e.preventDefault();
                      }}
                    >
                      {item.content}
                      <span className={styles.linkArrow}> ↗</span>
                    </a>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIconWrapper}>
                <span className={styles.featureIcon}>⏰</span>
              </div>
              <div>
                <h4>Operating Hours</h4>
                <p>24/7 Emergency Services Available</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIconWrapper}>
                <span className={styles.featureIcon}>🚗</span>
              </div>
              <div>
                <h4>Free Home Collection</h4>
                <p>Available in Select Areas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2 className={styles.sectionTitle}>Send us a Message</h2>
          </div>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={`${styles.formGroup} ${activeField === 'name' ? styles.active : ''}`}>
              <label htmlFor="name" className={styles.floatingLabel}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                placeholder=" "
                required
                className={styles.input}
                disabled={!mounted}
              />
              <div className={styles.inputFocusLine}></div>
            </div>

            <div className={`${styles.formGroup} ${activeField === 'email' ? styles.active : ''}`}>
              <label htmlFor="email" className={styles.floatingLabel}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                placeholder=" "
                required
                className={styles.input}
                disabled={!mounted}
              />
              <div className={styles.inputFocusLine}></div>
            </div>

            <div className={`${styles.formGroup} ${activeField === 'phone' ? styles.active : ''}`}>
              <label htmlFor="phone" className={styles.floatingLabel}>
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                placeholder=" "
                required
                className={styles.input}
                disabled={!mounted}
              />
              <div className={styles.inputFocusLine}></div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="testType" className={styles.selectLabel}>
                Test Type (Optional)
              </label>
              <select
                id="testType"
                name="testType"
                value={formData.testType}
                onChange={handleChange}
                className={styles.select}
                disabled={!mounted}
              >
                <option value="">Select a test type</option>
                {testTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className={`${styles.formGroup} ${activeField === 'message' ? styles.active : ''}`}>
              <label htmlFor="message" className={styles.floatingLabel}>
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                placeholder=" "
                rows="5"
                required
                className={styles.textarea}
                disabled={!mounted}
              ></textarea>
              <div className={styles.inputFocusLine}></div>
            </div>

            <button 
              type="submit" 
              className={`${styles.submitBtn} ${isSubmitting ? styles.loading : ''}`}
              disabled={isSubmitting || !mounted}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  <span className={styles.btnText}>Sending...</span>
                </>
              ) : (
                <>
                  <span className={styles.btnIcon}>📨</span>
                  <span className={styles.btnText}>Send Message</span>
                </>
              )}
            </button>

            {submitStatus === "success" && !showWhatsApp && (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✅</div>
                <div className={styles.successContent}>
                  <h4>Message Sent Successfully!</h4>
                  <p>We'll get back to you soon.</p>
                </div>
              </div>
            )}

            {showWhatsApp && (
              <div className={styles.whatsappOption}>
                <div className={styles.whatsappHeader}>
                  <div className={styles.whatsappIcon}>💬</div>
                  <h4>Continue on WhatsApp?</h4>
                </div>
                <p>Get instant responses and quick support through WhatsApp</p>
                <div className={styles.whatsappActions}>
                  <button 
                    type="button" 
                    className={styles.whatsappBtn}
                    onClick={handleWhatsAppRedirect}
                    disabled={!mounted}
                  >
                    <span className={styles.whatsappBtnIcon}>📱</span>
                    Continue on WhatsApp
                  </button>
                  <button 
                    type="button" 
                    className={styles.cancelBtn}
                    onClick={() => setShowWhatsApp(false)}
                    disabled={!mounted}
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={styles.quickActions}>
        <h2>Quick Actions</h2>
        <p className={styles.actionsSubtitle}>Get instant help through WhatsApp</p>
        <div className={styles.actionButtons}>
          {["Book a Test", "Request Home Collection", "Report Query"].map((action, index) => (
            <button 
              key={index} 
              className={styles.actionBtn}
              onClick={() => handleQuickAction(action)}
              disabled={!mounted}
            >
              <span className={styles.actionIcon}>
                {action === "Book a Test" ? "📋" : 
                 action === "Request Home Collection" ? "🏠" : "📄"}
              </span>
              <span className={styles.actionText}>{action}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Live Chat Indicator */}
      <div className={styles.liveChat}>
        <div className={styles.chatDot}></div>
        <span>Live Support Available</span>
      </div>
    </section>
  );
}