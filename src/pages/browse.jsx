import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.css/browse.css";

export default function Profiles() {
  const navigate = useNavigate();

  const profiles = [
    { name: "Recruiter", img: "/neti.jpg" },
    { name: "Engineer", img: "/netpfp2.jpg" },
    { name: "Stalker", img: "/netpfp1.jpg" },
    { name: "Explorer", img: "/netpfp3.jpg" }
  ];

  
  const handleSelect = (profileName) => {
  
    localStorage.setItem(
      "selectedProfile",
      JSON.stringify(profiles.find((p) => p.name === profileName))
    );

    
    navigate(`/profile/${profileName}`);
  };

  return (
    <div className="browse-container">
      <h1 className="browse-title">Who's watching?</h1>
      <div className="profiles-grid">
        {profiles.map((p, index) => (
          <div
            key={index}
            className="profile-box"
            onClick={() => handleSelect(p.name)}
          >
            <img src={p.img} alt={p.name} className="profile-img" />
            <span className="profile-name">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
