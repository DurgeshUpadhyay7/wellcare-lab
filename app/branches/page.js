import styles from "@/styles/Branches.module.css";

const branches = [
  {
    id: 1,
    name: "Satara Parisar Police Station Branch",
    address: "Near Satara Parisar Police Station, Aurangabad",
    map: "https://www.google.com/maps?q=Satara+Parisar+Police+Station,+Aurangabad",
    phone: "9420120226",
    hours: "7:00 AM - 9:00 PM",
    services: ["Blood Tests", "Urine Tests", "Basic Health Checkup"]
  },
  {
    id: 2,
    name: "Renuka Mata Mandir Branch",
    address: "Monda Naka, Aurangabad",
    map: "https://www.google.com/maps?q=Renuka+Mata+Mandir,+Monda+Naka,+Aurangabad",
    phone: "9420120226",
    hours: "7:00 AM - 9:00 PM",
    services: ["All Tests", "Home Collection", "Emergency Services"]
  },
  {
    id: 3,
    name: "Monda Naka Branch",
    address: "Monda Naka, Aurangabad",
    map: "https://www.google.com/maps?q=Monda+Naka,+Aurangabad",
    phone: "9420120226",
    hours: "7:00 AM - 9:00 PM",
    services: ["Blood Tests", "Sugar Tests", "Child Health"]
  },
  {
    id: 4,
    name: "Tanaji Chowk, Balaji Nagar Branch",
    address: "Shivshankar Colony, Monda Naka, Aurangabad",
    map: "https://www.google.com/maps?q=Tanaji+Chowk,+Balaji+Nagar,+Aurangabad",
    phone: "9420120226",
    hours: "7:00 AM - 9:00 PM",
    services: ["Blood Tests", "Sugar Tests", "Child Health"]
  },
  {
    id: 5,
    name: "Kailash Nagar Branch",
    address: "Near Sachin Laundry, Aurangabad",
    map: "https://www.google.com/maps?q=Kailash+Nagar,+Aurangabad",
    phone: "9420120226",
    hours: "7:00 AM - 9:00 PM",
    services: ["Complete Health Package", "Senior Citizen Discount"]
  },
  {
    id: 6,
    name: "Jinshi Ramanstpura Branch",
    address: "Aurangabad",
    map: "https://www.google.com/maps?q=Jinshi+Ramanstpura,+Aurangabad",
    phone: "9420120226",
    hours: "7:00 AM - 9:00 PM",
    services: ["All Pathology Tests", "Digital Reports"]
  },
  {
    id: 7,
    name: "Chotegaon Branch",
    address: "Opposite Canara Bank, Aurangabad",
    map: "https://www.google.com/maps?q=Chotegaon,+Aurangabad",
    phone: "9420120226",
    hours: "7:00 AM - 2:00 PM",
    services: ["Sunday Open", "Basic Tests"]
  },
];

const branchFeatures = [
  {
    icon: "🩺",
    title: "Modern Equipment",
    description: "All branches equipped with latest diagnostic technology"
  },
  {
    icon: "👨‍⚕️",
    title: "Expert Staff",
    description: "Qualified pathologists and trained technicians"
  },
  {
    icon: "🏠",
    title: "Home Collection",
    description: "Free sample collection from all areas"
  },
  {
    icon: "📱",
    title: "Digital Reports",
    description: "Get reports on WhatsApp & Email"
  },
  {
    icon: "⏰",
    title: "Quick Service",
    description: "Fast report delivery with accuracy"
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    description: "Competitive prices with quality service"
  }
];

export const metadata = {
  title: "Branches - Wellcare Pathology Laboratory",
};

export default function Branches() {
  return (
    <section className={styles.branches}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>Our Branches</h1>
          <p className={styles.heroSubtitle}>
            07 Branches across Chh. Sambhajinagar for your convenience
          </p>
          <div className={styles.underline}></div>
        </div>
      </div>

      {/* Branch Features */}
      <div className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Our Branches?</h2>
          <p className={styles.sectionSubtitle}>
            Every branch maintains the same high standards of quality and service
          </p>
          <div className={styles.featuresGrid}>
            {branchFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Branches Section */}
      <div className={styles.allBranches}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our 07 Branch Locations</h2>
          <p className={styles.sectionSubtitle}>
            Find the nearest Wellcare Pathology Laboratory branch
          </p>
          
          <div className={styles.branchesGrid}>
            {branches.map((branch) => (
              <div key={branch.id} className={styles.branchCard}>
                <div className={styles.cardHeader}>
                  <h3>{branch.name}</h3>
                  <div className={styles.branchBadge}>Branch #{branch.id}</div>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.address}>
                    <span className={styles.icon}>📍</span>
                    <p>{branch.address}</p>
                  </div>
                  
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <span className={styles.icon}>📞</span>
                      <span>{branch.phone}</span>
                    </div>
                    <div className={styles.contactItem}>
                      <span className={styles.icon}>⏰</span>
                      <span>{branch.hours}</span>
                    </div>
                  </div>

                  <div className={styles.services}>
                    <h4>Available Services:</h4>
                    <div className={styles.serviceTags}>
                      {branch.services.map((service, index) => (
                        <span key={index} className={styles.serviceTag}>
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <a
                    href={branch.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.directionsBtn}
                  >
                    <span className={styles.btnIcon}>🗺️</span>
                    Get Directions
                  </a>
                  <a href={`tel:${branch.phone}`} className={styles.callBtn}>
                    <span className={styles.btnIcon}>📞</span>
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.mapSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Find Us on Map</h2>
          <p className={styles.sectionSubtitle}>
            Click on any branch to get directions
          </p>
          <div className={styles.mapContainer}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapContent}>
                <span className={styles.mapIcon}>🗺️</span>
                <h3>Interactive Map</h3>
                <p>Click on branch cards above to view locations on Google Maps</p>
                <div className={styles.mapStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>7</div>
                    <div className={styles.statLabel}>Branches</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>24/7</div>
                    <div className={styles.statLabel}>Support</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>50+</div>
                    <div className={styles.statLabel}>Areas Covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Can't Find Your Location?</h2>
            <p>We provide free home collection service across Chh. Sambhajinagar</p>
            <div className={styles.ctaButtons}>
              <a href="tel:9420120226" className={styles.primaryBtn}>
                📞 Call for Home Collection
              </a>
              <a href="https://wa.me/919420120226" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className={styles.whatsappFloat}>
        <a href="https://wa.me/919420120226" target="_blank" rel="noopener noreferrer">
          💬 WhatsApp
        </a>
      </div>
    </section>
  );
}