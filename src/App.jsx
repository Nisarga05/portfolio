import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Splash from "./pages/splash";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Browse from "./pages/browse";
import Certificates from "./pages/certificate";
import Hire from "./pages/hire";
import ProfilePage from "./pages/Profile"; // <- new dynamic page

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        {/* Splash screen */}
        <Route path="/" element={<Splash />} />

        {/* Main pages */}
        <Route path="/browse" element={<Browse />} />

        <Route path="/home" element={<><Navbar /><Home /></>} />
        <Route path="/skills" element={<><Navbar /><Skills /></>} />
        <Route path="/projects" element={<><Navbar /><Projects /></>} />
        <Route path="/certificates" element={<><Navbar /><Certificates /></>} />
        <Route path="/hire" element={<><Navbar /><Hire /></>} />

        {/* Dynamic profile page */}
        <Route path="/profile/:profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
