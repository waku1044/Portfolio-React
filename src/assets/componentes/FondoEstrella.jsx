// src/components/StarBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function FondoEstrella() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        particles: {
          number: {
            value: 120,
            density: { enable: true, area: 800 }
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 1.5,
            random: true
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: { default: "bounce" }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 }
          }
        }
      }}
    />
  );
}
