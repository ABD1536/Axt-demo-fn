"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 2000ms (2 seconds)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Remove preloader from DOM after 2600ms (2s + 0.6s fade transition)
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`preloader-overlay ${fadeOut ? "fade-out" : ""}`}
      aria-hidden="true"
    >
      <div className="preloader-content">
        <h1 className="preloader-logo">AXTRAIT</h1>
      </div>
    </div>
  );
}
