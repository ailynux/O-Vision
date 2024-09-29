// src/components/ParticlesBackground.js
// src/components/ParticlesBackground.js
import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 50, // Number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          shape: {
            type: "circle", // You can also try "edge" or "triangle"
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
