"use client";

import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
  PanInfo,
} from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

interface Brand {
  name: string;
  logo: string;
}

const BRANDS: Brand[] = [
  { name: "Salontopper", logo: "/images/brand1.svg" },
  { name: "Seesing Flex", logo: "/images/brand2.svg" },
  { name: "Graafschap College", logo: "/images/brand3.svg" },
  { name: "Fides", logo: "/images/brand4.svg" },
  { name: "brand_image", logo: "/images/brand5.svg" },
  { name: "brand_image", logo: "/images/brand6.svg" },
  { name: "brand_image", logo: "/images/brand7.svg" },
  { name: "brand_image", logo: "/images/brand8.svg" },
];

export function BrandMarquee() {
  const duplicatedBrands = [...BRANDS, ...BRANDS];
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const xPercentage = useMotionValue(0);

  const xString = useTransform(xPercentage, (value) => `${value}%`);

  const xPos = useRef(0);

  useAnimationFrame((_, delta) => {
    if (isDragging) return;

    const baseSpeed = 0.003;
    const slowSpeed = 0.001;
    const moveAmount = delta * (isHovered ? slowSpeed : baseSpeed);

    xPos.current -= moveAmount;

    if (xPos.current <= -50) xPos.current = 0;
    if (xPos.current > 0) xPos.current = -50;

    xPercentage.set(xPos.current);
  });

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const dragResistance = 10000;
    const deltaPercentage = (info.delta.x / dragResistance) * 100;

    xPos.current += deltaPercentage;

    if (xPos.current <= -50) xPos.current = 0;
    if (xPos.current > 0) xPos.current = -50;

    xPercentage.set(xPos.current);
  };

  return (
    <section className="-mt-26 overflow-hidden">
      <div className="max-w-377.5 mx-auto px-4 md:px-6 mb-12">
        <h2 className="text-[2.5rem] md:text-[4rem] font-semibold tracking-tighter leading-none text-black/90">
          These brands <br /> got hyped.
        </h2>
      </div>

      <motion.div
        className="relative flex cursor-grab active:cursor-grabbing  mb-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDrag={handleDrag}
      >
        <motion.div
          style={{ x: xString }}
          className="flex flex-nowrap gap-2 md:gap-6 pointer-events-none"
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="shrink-0 w-34 h-36 md:w-[320px] md:h-70 border border-black/30 rounded-2xl flex items-center justify-center backdrop-blur-sm select-none"
            >
              <div className="relative w-full h-full p-8">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <hr className="text-black  h-1 max-w-377.5 mx-auto px-4 md:px-6" />
    </section>
  );
}
