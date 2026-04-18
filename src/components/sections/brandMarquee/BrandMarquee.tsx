"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BRANDS = [
  { name: "Salontopper", logo: "/images/brand1.svg" },
  { name: "Seesing Flex", logo: "/images/brand2.svg" },
  { name: "Graafschap College", logo: "/images/brand3.svg" },
  { name: "Fides", logo: "/images/brand4.svg" },
  { name: "8", logo: "/images/brand5.svg" },
  { name: "8", logo: "/images/brand6.svg" },
  { name: "8", logo: "/images/brand7.svg" },
  { name: "8", logo: "/images/brand8.svg" },
];

export function BrandMarquee() {
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="pb-24 border-b overflow-hidden">
      <div className="max-w-377.5 mx-auto px-4 md:px-6 mb-12">
        <h2 className="text-[2.5rem] md:text-[4rem] font-semibold tracking-tighter leading-none text-black/90">
          These brands <br /> got hyped.
        </h2>
      </div>

      <div className="relative flex">
        {/* The Track */}
        <motion.div
          className="flex flex-nowrap gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="shrink-0 w-62.5 h-50 md:w-[320px] md:h-70 border border-black/30 rounded-[14px] flex items-center justify-center "
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}