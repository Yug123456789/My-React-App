import React from 'react';
import Service from './Service'; // Adjust the path as necessary
import Certification from  '../../assets/Certification.png'
import Computer from  '../../assets/Computer.png'
import Loksewa from  '../../assets/Loksewa.png'
import CCNA from  '../../assets/CCNA.png'
import "./Service.css"



function ServiceList() {
    return (
        <section className="services">
            <Service
                imageSrc={Certification}
                altText="p1"
                title="Certification Courses"
                description="Advance your career with our expert-led certification classes. Gain valuable skills and credentials to succeed in a wide range of industries, all through practical, hands-on learning."
                link="#"
            />
            <Service
                imageSrc={Loksewa}
                altText="p2"
                title="Loksewa Classes"
                description="Prepare for success with our expert-led Loksewa classes. Gain the skills and knowledge needed to excel in the competitive Loksewa exams and advance your career."
                link="#"
            />
            <Service
                imageSrc={CCNA}
                altText="p1"
                title="CCNA Classes"
                description="Master networking with our CCNA certification classes. Get hands-on experience and the skills needed to pass the exam and excel in your IT career."
                link="#"
            />
             <Service
                imageSrc={Computer}
                altText="p2"
                title="Computer Operator Classes"
                description="Build essential IT skills with our Computer Operator classes. Learn the fundamentals to excel in office productivity, data management, and IT support roles."
                link="#"
            />
            {/* You can add more Servicecomponents here with different props */}
        </section>
    );
}

export default ServiceList;
