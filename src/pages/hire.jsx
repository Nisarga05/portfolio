import React from "react";
import "../style.css/hire.css"; 

const Hire = () => {
  return (
    <div className="hire-container">
      <h2 className="hire-title">Let's Connect</h2>

      <div className="hire-box">
        {/* Profile Image */}
        <img
          src="/me.jpg"
          alt="Nisarga Chandrashekar"
          className="hire-photo"
        />
        <h3 className="hire-name">Nisarga Chandrashekar</h3>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nisargachandrashekar"
          target="_blank"
          rel="noopener noreferrer"
          className="hire-link"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="hire-icon"
          />
          <span>LinkedIn Profile</span>
        </a>

        {/* Gmail */}
        <a
          href="mailto:nisargachandrasekkar@gmail.com"
          className="hire-link"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Gmail"
            className="hire-icon"
          />
          <span>nisargachandrasekkar@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Hire;
