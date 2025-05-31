import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div className='footer-content' style={footerContentStyle}>
        {/* Left Section - Logo and Text */}
        <div className="left-section" style={leftSectionStyle}>
          <img src="/Logo.png" alt="Logo" width="140" height="70" style={{ marginBottom: '10px' }} />
          <p>Your Education Guide!</p>
          <div className="social-icons" style={socialIconsStyle}>
            <a href="https://www.facebook.com/" style={iconStyle}><i className="fab fa-facebook"></i></a>
            <a href="https://www.twitter.com/" style={iconStyle}><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/" style={iconStyle}><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/" style={iconStyle}><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="middle-section" style={middleSectionStyle}>
          <h3>Our Services</h3>
          <p> - Certification</p>
          <p> - CCNA classes</p>h htebeeb h
          <p> - Loksewa Preparation</p>
          <p> - Computer Operator Clases</p>          
        </div>

        {/* Right Section - Contact Details */}
        <div className="right-section" style={rightSectionStyle}>
          <h3>Contact Us</h3>
          <div style={contactItemStyle}>
            <img src="aa.jpg" alt="Address Icon" style={iconImgStyle} />
            <p>Pulchowk, Lalitpur</p>
          </div>
          <div style={contactItemStyle}>
            <img src="bb.jpg" alt="Email Icon" style={iconImgStyle} />
            <p>info@educationguide.com</p>
          </div>
          <div style={contactItemStyle}>
            <img src="cc.png" alt="Phone Icon" style={iconImgStyle} />
            <p>+9779805530644</p>
          </div>
        </div>
      

      </div>
    </footer>
  );
}

// Footer styles
const footerStyle = {
  backgroundColor: '#3333',
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid #ddd',
};

// Footer content wrapper styles
const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px',
};

// Left section styles (logo and text)
const leftSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const middleSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  flex: '1',
};


// Right section styles (contact information)
const rightSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
};

// Social icons styles
const socialIconsStyle = {
  display: 'flex',
  gap: '14px', // Space between the icons
  marginTop: '0px', // Space between the paragraph and icons
};

// Individual icon style
const iconStyle = {
  fontSize: '24px',
  color: '#000', // Default color of icons
  textDecoration: 'none', // Removing underline on links
};

// Contact item styles
const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0',
};


// Contact item icon image style
const iconImgStyle = {
  width: '24px',
  height: '24px',
  marginRight: '10px',
  marginTop: '-15px',
};