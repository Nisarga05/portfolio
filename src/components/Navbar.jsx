import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../style.css/navbar.css";

const profiles = [
  { name: "Recruiter", img: "/neti.jpg" },
  { name: "Engineer", img: "/netpfp2.jpg" },
  { name: "Stalker", img: "/netpfp1.jpg" },
  { name: "Explorer", img: "/netpfp3.jpg" }
];

function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find the profile object based on the name
  const profileObj = profiles.find(p => p.name === profile);
  const profilePic = profileObj?.img;

 return (
  <nav className={`navbar ${scrolled ? "scrolled" : "transparent"}`}>
    {/* Left: logo + links */}
    <div className="nav-left">
      <div className="nav-logo">Nisarga.C</div>
      <div className="nav-links">
        <Link to="/browse">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/hire">Hire me</Link>
      </div>
    </div>

    {/* Right: profile */}
    <div className="nav-right">
      {profilePic && (
        <div className="profile-circle">
          <Link to="/browse">
          <img src={profilePic} alt={profile} />
          </Link>
        </div>
      )}
    </div>
  </nav>
);

}

export default Navbar;
