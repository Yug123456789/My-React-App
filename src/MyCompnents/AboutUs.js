import React from "react";

export default function AboutUs() {
  return (
    <section style={styles.page}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>Discover, Learn, Grow</h1>
          <p style={styles.heroSubHeading}>
            At <span style={styles.highlight}>Technagy</span>, we believe
            education has the power to unlock potential. Join a community of
            lifelong learners as we inspire, empower, and elevate individuals
            through high-quality, curated educational content.
          </p>
        </div>
        <div style={styles.heroImageContainer}>
          <img
            src="Learn.jpg"
            alt="Inspiration and learning"
            style={styles.heroImage}
          />
        </div>
      </div>

      {/* Mission Section */}
      <div style={styles.missionSection}>
        <h2 style={styles.sectionHeading}>Our Mission</h2>
        <p style={styles.sectionText}>
          Our mission is simple: to make learning accessible, engaging, and
          transformative. Whether you're sharpening existing skills or diving
          into new domains, Technagy serves as your guide in every step of your
          journey. We provide expertly crafted content and personalized learning
          paths, designed for today's learners.
        </p>
        <div style={styles.missionImageContainer}>
          <img
            src="Student.jpg"
            alt="Empowering education"
            style={styles.missionImage}
          />
        </div>
      </div>

      {/* Values Section */}
      <div style={styles.valuesSection}>
        <h2 style={styles.sectionHeading}>Our Core Values</h2>
        <div style={styles.valuesGrid}>
          <div style={styles.valueItem}>
            <img src="future.jpg" alt="Innovation" style={styles.valueImage} />
            <h3 style={styles.valueTitle}>Innovation</h3>
            <p style={styles.valueText}>
              We push the boundaries of what's possible in education through
              technology, always seeking out creative ways to enhance learning.
            </p>
          </div>
          <div style={styles.valueItem}>
            <img
              src="teamwork.jpg"
              alt="Collaboration"
              style={styles.valueImage}
            />
            <h3 style={styles.valueTitle}>Collaboration</h3>
            <p style={styles.valueText}>
              Together, we achieve more. Collaboration with educators,
              institutions, and our community is at the heart of everything we
              do.
            </p>
          </div>
          <div style={styles.valueItem}>
            <img
              src="Success.jpg"
              alt="Empowerment"
              style={styles.valueImage}
            />
            <h3 style={styles.valueTitle}>Empowerment</h3>
            <p style={styles.valueText}>
              We empower learners to pursue their passions, build their
              knowledge, and transform their lives through education.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.sectionHeading}>Join Us Today</h2>
        <p style={styles.sectionText}>
          Ready to start your learning journey? Explore our wide range of
          courses, designed for all skill levels, and take your next step with{" "}
          <span style={styles.highlight}>Technagy</span>.
        </p>
        <button style={styles.ctaButton}>Explore Courses</button>
      </div>
    </section>
  );
}

// Styles using JS objects
const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    background: "#f5f7fa",
    padding: "40px 20px",
    lineHeight: "1.6",
  },
  // Hero section
  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "60px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
  },
  heroText: {
    flex: 1,
    paddingRight: "20px",
  },
  heroHeading: {
    fontSize: "48px",
    color: "#007BFF",
    fontWeight: "bold",
  },
  heroSubHeading: {
    fontSize: "18px",
    color: "#555",
    marginTop: "20px",
  },
  highlight: {
    color: "#ff6b6b",
    fontWeight: "bold",
  },
  heroImageContainer: {
    flex: 1,
  },
  heroImage: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  },

  // Mission section
  missionSection: {
    textAlign: "center",
    margin: "60px 0",
  },
  sectionHeading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  sectionText: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "40px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  missionImageContainer: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  missionImage: {
    width: "100%",
    borderRadius: "10px",
  },

  // Values section
  valuesSection: {
    padding: "60px 0",
    backgroundColor: "#eaf2f8",
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    marginTop: "40px",
  },
  valueItem: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
  },
  valueImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "20px",
    borderRadius: "10px",
  },
  valueTitle: {
    fontSize: "24px",
    color: "#007BFF",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  valueText: {
    fontSize: "16px",
    color: "#555",
  },

  // Call-to-action section
  ctaSection: {
    textAlign: "center",
    padding: "60px 0",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
  },
  ctaButton: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  ctaButtonHover: {
    backgroundColor: "#0056b3",
  },
};
