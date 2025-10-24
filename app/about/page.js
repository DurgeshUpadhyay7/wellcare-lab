import styles from "@/styles/About.module.css";

export const metadata = {
  title: "About - Wellcare Pathology Laboratory",
};

export default function About() {
  return (
    <section className={styles.about}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.mainTitle}>About Wellcare Pathology Laboratory</h1>
        <div className={styles.underline}></div>
        <p className={styles.heroSubtitle}>Your Trusted Partner in Accurate Diagnostics Since 2023</p>
      </div>

      <div className={styles.contentWrapper}>
        {/* Founder Section */}
        <div className={styles.founderSection}>
          <div className={styles.founderImage}>
            <div className={styles.imagePlaceholder}>
              <span>Founder Image</span>
            </div>
          </div>
          <div className={styles.founderInfo}>
            <h2>Our Visionary Leader</h2>
            <h3>Pavan Baban Shinde</h3>
            <p className={styles.founderDescription}>
              Founded by <strong className={styles.highlight}>Pavan Baban Shinde</strong>, 
              Wellcare Pathology Laboratory stands as a testament to his vision of 
              <strong> healthcare excellence</strong> and <strong>patient-first approach</strong>.
            </p>
            <div className={styles.qualifications}>
              <h4>Professional Qualifications</h4>
              <div className={styles.qualificationList}>
                <div className={styles.qualificationItem}>
                  <span className={styles.qualIcon}>🎓</span>
                  <span>Certified Pathologist</span>
                </div>
                <div className={styles.qualificationItem}>
                  <span className={styles.qualIcon}>⭐</span>
                  <span>5+ Years Experience</span>
                </div>
                <div className={styles.qualificationItem}>
                  <span className={styles.qualIcon}>🔬</span>
                  <span>Clinical Pathology Specialist</span>
                </div>
                <div className={styles.qualificationItem}>
                  <span className={styles.qualIcon}>🏛️</span>
                  <span>IMA Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className={styles.storySection}>
          <h2>Our Journey</h2>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <p>
                Established in 2023, Wellcare Pathology Laboratory began with a simple yet powerful mission: 
                to provide <strong>accurate, reliable, and accessible</strong> diagnostic services to the 
                community of Chh. Sambhajinagar.
              </p>
              <p>
                What started as a single laboratory has now grown into a trusted network, serving 
                <strong> thousands of patients</strong> with commitment to excellence and 
                <strong> uncompromising quality standards</strong>.
              </p>
              <div className={styles.milestones}>
                <div className={styles.milestone}>
                  <div className={styles.milestoneNumber}>2023</div>
                  <div className={styles.milestoneText}>Founded with a vision for quality diagnostics</div>
                </div>
                <div className={styles.milestone}>
                  <div className={styles.milestoneNumber}>5000+</div>
                  <div className={styles.milestoneText}>Patients Served</div>
                </div>
                <div className={styles.milestone}>
                  <div className={styles.milestoneNumber}>99.8%</div>
                  <div className={styles.milestoneText}>Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className={styles.missionVisionSection}>
          <h2>Our Core Principles</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>🎯</div>
              <h3>Our Mission</h3>
              <p>
                To combine <strong>cutting-edge technology</strong>, <strong>medical expertise</strong>, 
                and <strong>compassionate care</strong> in every diagnostic service we provide.
              </p>
            </div>

            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the <strong>most trusted pathology laboratory</strong> in Chh. Sambhajinagar, 
                setting benchmarks in <strong>diagnostic accuracy</strong> and <strong>patient care</strong>.
              </p>
            </div>

            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>💎</div>
              <h3>Our Values</h3>
              <ul className={styles.valuesList}>
                <li>Accuracy & Precision</li>
                <li>Patient-Centric Care</li>
                <li>Integrity & Transparency</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Promise Section */}
        <div className={styles.qualitySection}>
          <h2>Our Quality Promise</h2>
          <div className={styles.qualityGrid}>
            <div className={styles.qualityCard}>
              <div className={styles.qualityIcon}>⭐</div>
              <h3>100% Accurate Reports</h3>
              <p>
                We are committed to delivering <strong className={styles.accuracy}>100% accurate reports</strong> 
                with <strong>quick turnaround times</strong> and <strong>transparent processes</strong>.
              </p>
            </div>

            <div className={styles.qualityCard}>
              <div className={styles.qualityIcon}>🏥</div>
              <h3>Patient Care Excellence</h3>
              <p>
                Ensuring the best <strong>patient experience</strong> through 
                <strong> friendly staff</strong>, <strong>comfortable facilities</strong>, 
                and <strong>comprehensive support</strong>.
              </p>
            </div>

            <div className={styles.qualityCard}>
              <div className={styles.qualityIcon}>🔬</div>
              <h3>Advanced Technology</h3>
              <p>
                Equipped with <strong>modern diagnostic equipment</strong> and 
                <strong> automated systems</strong> for precise and reliable test results.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={styles.teamSection}>
          <h2>Meet Our Expert Team</h2>
          <p className={styles.teamSubtitle}>Qualified professionals dedicated to your health</p>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.memberPlaceholder}>👨‍⚕️</div>
              </div>
              <h3>Pathologists</h3>
              <p>Certified medical professionals with specialized training in laboratory medicine</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.memberPlaceholder}>👩‍💼</div>
              </div>
              <h3>Lab Technicians</h3>
              <p>Skilled technicians trained in sample collection and analysis</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.memberPlaceholder}>👨‍💻</div>
              </div>
              <h3>Support Staff</h3>
              <p>Friendly team ensuring smooth operations and patient assistance</p>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className={styles.facilitiesSection}>
          <h2>Our State-of-the-Art Facilities</h2>
          <div className={styles.facilitiesGrid}>
            <div className={styles.facilityItem}>
              <div className={styles.facilityIcon}>🦠</div>
              <h3>Modern Laboratory</h3>
              <p>Equipped with advanced diagnostic equipment and automated systems</p>
            </div>
            <div className={styles.facilityItem}>
              <div className={styles.facilityIcon}>🧼</div>
              <h3>Hygienic Environment</h3>
              <p>Maintaining highest standards of cleanliness and sterilization</p>
            </div>
            <div className={styles.facilityItem}>
              <div className={styles.facilityIcon}>💻</div>
              <h3>Digital Infrastructure</h3>
              <p>Computerized systems for efficient report generation and tracking</p>
            </div>
            <div className={styles.facilityItem}>
              <div className={styles.facilityIcon}>🛋️</div>
              <h3>Comfortable Waiting Area</h3>
              <p>Spacious and comfortable waiting area for patients</p>
            </div>
          </div>
        </div>

        {/* Branches Section */}
        <div className={styles.branchesSection}>
          <h2>Our Presence Across Chh. Sambhajinagar</h2>
          <p>
            With <strong>multiple strategically located branches</strong>, we bring 
            <strong> expert diagnostic services closer to your doorstep</strong>. 
            Each branch is equipped with modern facilities and staffed by 
            experienced professionals.
          </p>
          <div className={styles.branchHighlights}>
            <span className={styles.branchTag}>Modern Equipment</span>
            <span className={styles.branchTag}>Expert Staff</span>
            <span className={styles.branchTag}>Easy Accessibility</span>
            <span className={styles.branchTag}>Quick Reports</span>
            <span className={styles.branchTag}>Home Collection</span>
            <span className={styles.branchTag}>24/7 Emergency</span>
          </div>
        </div>

        {/* Accreditations & Certifications */}
        <div className={styles.accreditationSection}>
          <h2>Our Accreditations</h2>
          <div className={styles.accreditationGrid}>
            <div className={styles.accreditationItem}>
              <div className={styles.accreditationIcon}>✅</div>
              <h3>Quality Certified</h3>
              <p>Following international quality standards in all procedures</p>
            </div>
            <div className={styles.accreditationItem}>
              <div className={styles.accreditationIcon}>🏛️</div>
              <h3>IMA Registered</h3>
              <p>Registered member of Indian Medical Association</p>
            </div>
            <div className={styles.accreditationItem}>
              <div className={styles.accreditationIcon}>📋</div>
              <h3>Standard Protocols</h3>
              <p>Following standardized testing protocols and procedures</p>
            </div>
          </div>
        </div>

        {/* Community Involvement */}
        <div className={styles.communitySection}>
          <h2>Community Involvement</h2>
          <div className={styles.communityContent}>
            <div className={styles.communityText}>
              <p>
                At Wellcare Pathology Laboratory, we believe in <strong>giving back to the community</strong> 
                that has trusted us with their health. We actively participate in:
              </p>
              <ul className={styles.communityList}>
                <li>🩺 Free health check-up camps</li>
                <li>🎯 Health awareness programs</li>
                <li>🏥 Discounted tests for senior citizens</li>
                <li>📚 Educational seminars on preventive healthcare</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2>Experience the Wellcare Difference</h2>
          <p>Your health is our priority. Trust us with your diagnostic needs.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryCta}>Book Your Test Now</button>
            <button className={styles.secondaryCta}>Find Nearest Branch</button>
          </div>
        </div>
      </div>
    </section>
  );
}