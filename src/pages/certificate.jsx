import React from "react";
import "../style.css/certificate.css"; 

const certificationsData = [
  {
    id: 1,
    title: "Electric Vehicle technology",
    issuer: "Alphabets Digital Labs Pvt. Ltd",
    date: "October 2025",
    image: "/EV.jpg",
  },
  {
    id: 2,
    title: "Embedded and IOT Application",
    issuer: "ETech Prowess",
    date: "July 2024",
    link: "/Embedded and Iot.jpg",
  },
  {
    id: 3,
    title: "Robotic Design and Application",
    issuer: "Pantech e Learning",
    date: "November 2024",
    link: "/Robotic design.jpg",
  },
  {
    id: 4,
    title: "Verilog HDL",
    issuer: "Maven Silicon",
    date: "June 2025",
    link: "/Verilog.jpg",
  },
  {
    id: 5,
    title: "C programming",
    issuer: "Udemy",
    date: "April 2026",
    link: "https://www.udemy.com/certificate/UC-5354fec5-4a1d-4fcd-81dd-d454f8b08402/",
  },
  {
    id: 6,
    title: "Python",
    issuer: "Udemy",
    date: "April 2025",
    link: "https://www.udemy.com/certificate/UC-2e47dfb9-68aa-483e-9903-9e165c52d828/",
  },
];

const Certification = () => {
  return (
    <div className="certification-container">
      <h2 className="section-title">Certifications</h2>
      <div className="certification-grid">
        {certificationsData.map((cert, index) => (
          <div
            key={cert.id}
            className="cert-card"
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <div className="cert-details">
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-button"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
