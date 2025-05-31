import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";
import Header from './MyCompnents/Header';
import Footer from './MyCompnents/Footer';
import ContactUs from './MyCompnents/ContactUs';
import './App.css';
import AboutUs from './MyCompnents/AboutUs';
import OurServices from './MyCompnents/OurServices';


function App() {
  
  return (
    <>
      <Router>
        <Header /> {/* Assuming the header is common across pages */}

        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              {/* Carousel - Visible only on the home page */}
              <div className="container-fluid mt-0 px-0">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                      aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="Rr.jpg" alt="Slide 1" width="1212" height="600" className="d-inline-block" />
                    </div>
                    <div className="carousel-item">
                      <img src="q.jpg" alt="Slide 2" width="1212" height="600" className="d-inline-block" />
                    </div>
                    <div className="carousel-item">
                      <img src="Qq.jpg" alt="Slide 3" width="1212" height="600" className="d-inline-block" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              {/* "Our Vision" Section */}
              <div style={containerStyle}>
                <div style={textSectionStyle}>
                  <h3 style={{ borderLeft: '4px solid black', paddingLeft: '15px' }}>Our Vision</h3>
                  <p>
                    Technagy's Vision is to provide education and knowledge through a website, making it easier for people who do not have access to traditional education facilities to gain knowledge and skills.
                  </p>
                </div>

                <div style={imageSectionStyle}>
                  <img src="Rrr.jpeg" alt="Knowledge" style={imageStyle} />
                </div>
              </div>
            </>
          } />
          
          {/* About Us Route */}
          <Route path="/aboutus" element={<AboutUs />} />

          {/* Contact Us Route */}
          <Route path="/contactus" element={<ContactUs />} />

          {/* Our Services Route */}
          <Route path="/ourservices" element={<OurServices />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
};

const textSectionStyle = {
  flex: '1',
  paddingRight: '20px',
};

const imageSectionStyle = {
  flex: '1',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};
