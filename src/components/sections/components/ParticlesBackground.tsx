"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [brandColor, setBrandColor] = useState("#6366f1");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const updateBrandColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue("--brand")
        .trim();

      setBrandColor(color);
    };

    updateBrandColor();

    const observer = new MutationObserver(updateBrandColor);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },

      particles: {
        number: {
          value: 50,
        },

        color: {
          value: brandColor,
        },

        links: {
          enable: true,
          distance: 150,
          color: brandColor,
          opacity: 0.5,
          width: 1,
        },

        opacity: {
          value: {
            min: 0.2,
            max: 0.7,
          },
        },

        size: {
          value: {
            min: 1,
            max: 3,
          },
        },

        move: {
          enable: true,
          speed: 0.6,
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },

          onClick: {
            enable: true,
            mode: "push",
          },
        },

        modes: {
          repulse: {
            distance: 100,
          },

          push: {
            quantity: 3,
          },
        },
      },

      detectRetina: true,
    }),
    [],
  );

  if (!init) {
    return null;
  }

  return (
    <Particles id="particles" options={options} className="absolute inset-0" />
  );
}
