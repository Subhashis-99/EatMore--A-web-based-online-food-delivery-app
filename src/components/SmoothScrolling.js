// src/components/SmoothScrolling.js
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScrolling = ({ children }) => {
  // Configuration options for lenis
  const lenisOptions = {
    lerp: 0.1, // Smoothness
    duration: 1.5, // Scrolling duration
    smoothTouch: true, // Smooth scrolling for touch devices
    smooth: true, // Enable smooth scrolling
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
