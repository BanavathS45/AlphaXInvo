import React, { useState, useEffect } from "react";
import "../../css/ballAnimation.css";
const ScrollAnimation = () => {
  const [scrollPos, setScrollPos] = useState(0);

  // Update scroll position on window scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.min(scrollPos / 300, 1);
  return (
    <>
      {/* Balls following the scroll with opacity */}
      <div
        className="scrollBall ball1"
        style={{
          transform: `translateY(${scrollPos}px)`,
          opacity: opacity,
        }}
      ></div>
      <div
        className="scrollBall ball2"
        style={{
          transform: `translateY(${scrollPos}px)`,
          opacity: opacity,
        }}
      ></div>
      <div
        className="scrollBall ball3"
        style={{
          transform: `translateY(${scrollPos}px)`,
          opacity: opacity,
        }}
      ></div>

    
    </>
  );
};

export default ScrollAnimation;
