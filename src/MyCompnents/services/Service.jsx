import React from 'react';
import "./Service.css"

function Service({ imageSrc, altText, title, description, link }) {
    return (
        <div className="service">
            <img src={imageSrc} alt={altText} />
            <h2>{title}</h2>
            <p>{description}</p>
            <br />
            <a href={link} className="cta-btn">Explore</a>
        </div>
    );
}

export default Service;
