import React from "react";
import "../style.css/skill.css"; 

const skillsData = {
   embeddedSystems: [
    { name: "Microcontrollers", icon: "🤖", description: "Programming Arduino, ESP32, STM32 for small projects" },
    { name: "Embedded C/C++", icon: "💻", description: "Writing code to control hardware and sensors" },
    { name: "Sensors & Actuators", icon: "📡", description: "Using temperature, motion, and other sensors" },
    { name: "IoT Systems", icon: "🌐", description: "Connecting devices to the internet and monitoring data" },
  ],
  vlsiDigital: [
    { name: "Digital Circuits", icon: "💡", description: "Making simple logic circuits and designs" },
     {name: "Verilog Basics", icon: "🖥️", description: "Writing simple code to describe how circuits behave" },
  ],
  modelingSimulation: [
    { name: "MATLAB", icon: "📊", description: "Analyzing data and testing ideas" },
    { name: "Simulink", icon: "🛠️", description: "Simulating systems and simple projects" },
    { name: "LTspice", icon: "⚡", description: "Testing power electronics circuits" },
  ],
  electronicsCircuit: [
    { name: "Circuit Design", icon: "🔌", description: "Making and testing basic circuits" },
    { name: "Multimeter & CRO", icon: "📐", description: "Measuring and debugging circuits" },
    { name: "Control Systems", icon: "🎛️", description: "Simple feedback and control projects" },
  ],
  programming: [
    { name: "C/C++", icon: "🖥️", description: "General and embedded programming" },
    { name: "Python", icon: "🐍", description: "Automating tasks and analyzing data" },
    { name: "Embedded C", icon: "💻", description: "Programming microcontrollers for hardware control" },
    { name: "JavaScript", icon: "⚡", description: "Making simple web pages interactive" },
    { name: "HTML & CSS", icon: "🌐", description: "Creating web pages and styling them" },
    { name: "React + Vite", icon: "⚛️", description: "Building simple modern web apps" },
  ],
  tools: [
    { name: "Git & GitHub", icon: "🐙", description: "Saving code and working with others" },
    { name: "MATLAB/Simulink", icon: "📊", description: "Testing and simulating projects" },
    { name: "ModelSim / Proteus / Tinkercad", icon: "🛠️", description: "Trying out circuits and code in software" },
    { name: "LTspice", icon: "⚡", description: "Simulating power electronics and circuit designs" },
  ],
};
  


const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <div className="icon">{skill.icon}</div>
    <div className="skill-name">
      {skill.name.split("").map((letter, idx) => (
        <span
          key={idx}
          className="letter"
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          {letter}
        </span>
      ))}
    </div>
    <div className="skill-description">{skill.description}</div>
  </div>
);

const SkillSection = ({ title, skills }) => (
  <div>
    <h2 className="category-title">{title}</h2>
    <div className="skills-grid">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="skills-container">
      

      <SkillSection title="Embedded Systems" skills={skillsData.embeddedSystems} />
      <SkillSection title="VLSI Digital" skills={skillsData.vlsiDigital} />
      <SkillSection title="Modeling & Simulation" skills={skillsData.modelingSimulation} />
      <SkillSection title="Electronics & Circuit" skills={skillsData.electronicsCircuit} />
      <SkillSection title="Programming" skills={skillsData.programming} />
      <SkillSection title="Tools" skills={skillsData.tools} />
    </div>
  );
};

export default Skills;
