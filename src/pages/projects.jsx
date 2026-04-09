import React from "react";
import "../style.css/project.css"; 

const projectsData = [
 {
  id: 1,
  title: "IoT-Based LPG Vehicle Tracking & Safety System",
  description: "A smart embedded system designed to detect LPG gas leaks, track location, and send alerts.",
  image: "/project1.jpg",
  tech: ["ESP8266", "C/C++", "Sensors", "GPS", "GSM", "ThingSpeak"],
  link: "/IoT-Based LPG Vehicle Tracking and Safety System.pdf",
},
  {
  id: 2,
  title: "Moisture-Based Automated Watering System",
  description: "An automated irrigation system that monitors soil moisture in real-time and activates watering when levels drop below a set threshold.",
  image: "/project2.jpeg",
  tech: ["Arduino Nano", "C/C++", "Sensors", "Automation", "LCD Display"],
  link: "/Moisture-Based Automated Watering System.pdf",
},
  {
  id: 3,
  title: "DC-DC Converter & PID Control Simulations",
  description: "Designed and simulated buck and boost converters along with PID control systems using LTspice to analyze voltage regulation, transient response, and system stability.",
  image: "/project3.png",
  tech: ["LTspice", "Power Electronics", "Control Systems", "Circuit Simulation"],
  link: "/Buck and Boost.pdf",
},
{
  id: 4,
  title: "Vehicle Dynamics Modeling and Simulation",
  description: "Developed a vehicle dynamics model using Simulink to analyze speed and distance response under continuous and lookup table based inputs.",
  image: "/project4.png",
  tech: ["MATLAB", "Simulink"],
  link: "/Vehicle Dynamics Modeling.pdf",
},
{
  id: 5,
  title: "ECG Signal Simulator in MATLAB",
  description: "Developed a MATLAB-based ECG simulator that models P, Q, R, S, T, and U waves, allowing customization of heart rate and wave parameters. The simulation produces dynamic ECG waveforms for visualization and analysis of cardiac activity.",
  image: "/project5.png",
  tech: ["MATLAB", "Signal Processing"],
  link: "/ECG .pdf",
},

  {
    id: 6,
    title: "Netflix-Portfolio",
    description: "Netflix themed Portfolio",
    image: "/netflixport.png",
    tech: ["HTML", "CSS", "JavaScript", "React+Vite"],
    link: "https://nisargachandrashekar-portfolio.vercel.app",
  },

 
  
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <a
            key={project.id}
            href={project.link}             
            target="_blank"                  
            rel="noopener noreferrer"        
            className="project-card"
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.tech.map((techItem, idx) => (
                  <span key={idx} className="tech-badge">{techItem}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
