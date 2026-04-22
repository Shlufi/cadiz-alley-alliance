"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/alley-1.jpg",
  "/images/alley-2.jpg",
  "/images/alley-3.jpg",
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow">
      <div className="slideshow-images">
        {images.map((src, index) => (
          <div
            key={index}
            className={`slideshow-slide ${index === current ? "active" : ""}`}
          >
            <Image
              src={src}
              alt={`Cadiz Alley ${index + 1}`}
              fill
              priority={index === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <div className="slideshow-overlay" />
      <div className="slideshow-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
