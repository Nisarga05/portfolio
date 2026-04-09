// src/pages/Splash.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import introMusic from "../assets/audio.mp3";


export default function Splash() {
  const navigate = useNavigate();
  const [start, setStart] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (start && !audioRef.current) {
      audioRef.current = new Audio(introMusic);
      audioRef.current.volume = 0.2;

      setTimeout(() => {
        audioRef.current.play().catch(() => console.log("Click to play audio"));
      }, 200);
    }
  }, [start]);

  return (
    <div className="splash-container" onClick={() => setStart(true)}>
      <motion.h1
        className="splash-logo"
        initial={{ scale: 0.5, opacity: 0.8 }}
        animate={{ scale: start ? 1 : 0.5, opacity: start ? 1 : 0.8 }}
        transition={{ duration: 1.8, ease: [0.6, 0, 0.2, 1] }}
        onAnimationComplete={() => start && navigate("/browse")}
      >
        Nisarga Chandrashekar
      </motion.h1>
    </div>
  );
}
