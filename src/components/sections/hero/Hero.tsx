"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import HeroVideo from "./HeroVideo";
import StatCard from "./StatCard";

const rotationVariations = [
  [-6, 4, -2],
  [-2, 6, -5],
  [4, -3, 7],
  [8, -4, 3],
];

const initialCardStates = [
  { x: 0, y: 0 },
  { x: 340, y: 0 },
  { x: 680, y: 0 },
  { x: 1020, y: 0 },
];

export default function Hero() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  // Track the current rotation for card
  const [rotationSteps, setRotationSteps] = useState([0, 0, 0, 0]);

  const handleHoverEnd = (index: number) => {
    setHoveredCardIndex(null);
    // Move to the next rotation variation for this specific card
    setRotationSteps((prev) => {
      const next = [...prev];
      next[index] = (next[index] + 1) % rotationVariations[index].length;
      return next;
    });
  };

  const cardVariants: Variants = {
    base: (index: number) => ({
      scale: 1,
      zIndex: 10 + index,
      x: initialCardStates[index].x,
      y: initialCardStates[index].y,
      rotate: rotationVariations[index][rotationSteps[index]],
      transition: { type: "spring", stiffness: 200, damping: 25 },
    }),
    hovered: {
      scale: 1.09,
      rotate: 0,
      zIndex: 100,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    neighborDisplacedLeft: (index: number) => ({
      x: initialCardStates[index].x - 80,
      rotate: rotationVariations[index][rotationSteps[index]],
      transition: { type: "spring", stiffness: 200, damping: 30 },
    }),
    neighborDisplacedRight: (index: number) => ({
      x: initialCardStates[index].x + 80,
      rotate: rotationVariations[index][rotationSteps[index]],
      transition: { type: "spring", stiffness: 200, damping: 30 },
    }),
  };

  const getCardVariant = (index: number) => {
    if (hoveredCardIndex === null) return "base";
    if (index === hoveredCardIndex) return "hovered";
    return index < hoveredCardIndex
      ? "neighborDisplacedLeft"
      : "neighborDisplacedRight";
  };

  return (
    <section className="pt-24 md:pt-40 pb-40 bg-[#FAF4EC] overflow-hidden min-h-screen">
      <Container>
        <div className="max-w-5xl">
          <h1 className="text-black text-[clamp(2.5rem,7vw,6.375rem)] font-semibold leading-[0.96] tracking-tight">
            Get Hyped. Get <br /> Noticed. Get Results.
          </h1>
          <p className="mt-8 text-[1.50rem] leading-snug text-black/80 font-bold max-w-md">
            Klaar met gokken op content <br className="hidden md:block" /> die
            niets oplevert?
          </p>
        </div>

        {/* cards  */}
        <div className="flex justify-start lg:justify-center mt-14 overflow-x-auto lg:overflow-visible pb-20 no-scrollbar">
          <div className="relative h-137.5 min-w-325 lg:min-w-0 lg:w-full lg:max-w-365">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                custom={i}
                initial="base"
                animate={getCardVariant(i)}
                variants={cardVariants}
                className="absolute left-6 lg:left-10 top-10 lg:top-0 w-75 md:w-90 h-112.5 md:h-116.25 rounded-4xl overflow-hidden"
                onHoverStart={() => setHoveredCardIndex(i)}
                onHoverEnd={() => handleHoverEnd(i)}
              >
                {i === 0 && (
                  <StatCard
                    title="10M+"
                    subtitle="Organische views"
                    description="Groei door slimme content"
                    color="bg-[#2483F9]"
                  />
                )}
                {i === 1 && (
                  <HeroVideo link="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4" />
                )}
                {i === 2 && (
                  <StatCard
                    title="30+"
                    subtitle="Merken geholpen"
                    description="Van start-up tot multinational"
                    color="bg-[#3DD68C]"
                  />
                )}
                {i === 3 && (
                  <HeroVideo link="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
