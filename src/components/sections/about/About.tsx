"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { WorkCard } from "./WorkCard"; 
import { useRef } from "react";

const MotionLink = motion(Link);

const WORK_DATA = [
  {
    image: "/images/work1.avif", 
    title: "Van nul naar vol, binnen 3 weken",
    brand: "Bullit",
    color: "border-[#fa5424]", 
    bgColor: "#fa5424",
    video: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4"
  },
  {
    image: "/images/work2.avif",
    title: "Zacht in smaak, sterk in beeld",
    brand: "Roasta",
    color: "border-[#0d8dff]", 
    bgColor: "#0d8dff",
    video: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4"
  },
  {
    image: "/images/image1.png",
    title: "Content die écht smaakt (en raakt)",
    brand: "Loco",
    color: "border-[#33c791]", 
    bgColor: "#33c791",
    video: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4"
  },
];

export default function About() {
const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -260]);
  
  const translations = [y1, y2, y3];

  return (
    <section ref={containerRef} className="pt-10 pb-0 lg:pb-30 overflow-hidden">
        {/* Row 1 */}
        <div className="mb-10 md:mb-18 max-w-319! mx-auto px-4 md:px-6">
          <h2 className="tracking-tighter text-[2.9rem] md:text-[6.2rem] font-bold leading-[0.9] md:leading-none">
            Content{" "}
            <span className="hidden lg:inline">
              <br />
            </span>
            dat scoort.
          </h2>
          <p className="text-[1.25rem] lg:text-[1.5rem] leading-tight font-semibold text-[#1a1a1a] w-full md:w-97.5 mt-6 mb-6">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
            doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>
          <MotionLink href="/" className="group inline-flex items-center">
            <motion.div
              className="flex items-center tracking-tight text-black/80 border border-black font-bold text-[16px] p-1 pl-2 rounded-xl! cursor-pointer"
              whileHover={{
                skewY: -6,
                skewX: 3,
                borderRadius: "10px",
                padding: "5px",
                gap: "2px",
                paddingLeft: "8px",
              }}
              whileTap={{ skewY: 3, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <span className="text-[17px]">Bekijk al ons werk</span>
              <ArrowRight
                strokeWidth={2.5}
                className="p-2 ml-1 bg-black rounded-lg text-white"
                size={34}
              />
            </motion.div>
          </MotionLink>
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-20 max-w-339! mx-auto px-4 md:px-6">
         {WORK_DATA.map((work, index) => (
            <motion.div
              key={index}
              style={{ y: translations[index] }} 
              className={
                ` ${index === 1 ? "md:translate-y-3 lg:-translate-y-4" : ""}
                  ${index === 2 ? "md:translate-y-6 lg:-translate-y-8" : ""}`
              }
            >
              <WorkCard {...work} />
            </motion.div>
          ))}
        </div>
    </section>
  );
}
