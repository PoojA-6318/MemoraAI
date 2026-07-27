import Particles from "@tsparticles/react";

function ParticlesBg() {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#05030a",
          },
        },
        particles: {
          number: {
            value: 40,
          },
          color: {
            value: ["#00ffff", "#a855f7"],
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
}

export default ParticlesBg;