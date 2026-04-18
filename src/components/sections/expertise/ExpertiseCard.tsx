"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

interface ExpertiseCardProps {
  id: string;
  title: string;
  tag: string;
  description: string;
  subtext: string;
  color: string;
  textColor: string;
  buttonColor: string;
  mediaUrl: string;
  index: number;
  totalCards: number;
}

export default function ExpertiseCard({
  title,
  id,
  tag,
  description,
  subtext,
  color,
  textColor,
  buttonColor,
  mediaUrl,
  index,
  totalCards,
}: ExpertiseCardProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const isLast = index === totalCards - 1;

  // Stacking Transformations
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : -2]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-0"
    >
      <motion.div
        style={{ scale, rotate }}
        className={`relative w-full h-[93vh] md:h-[88vh] ${color} rounded-[30px] p-6 md:p-12 flex flex-col md:flex-row justify-between overflow-hidden`}
      >
        {/* Left Side */}
        <div className="flex flex-col justify-between z-10 w-full md:w-2/3 h-full">
          <div>
            <span
              className={`px-2.5 py-1.5 rounded-md text-sm md:text-lg font-semibold mb-4 md:mb-6 inline-block ${
                title === "Social strategy" ? "bg-[#eae4d8]" : "bg-white"
              }`}
            >
              {tag}
            </span>
            <h2
              className={`mb-4 text-[2.2rem] md:text-[4rem] font-semibold leading-[0.9] md:leading-[0.85] ${textColor} tracking-tighter`}
            >
              {title}
            </h2>
            <div
              className={`relative block md:hidden w-36 h-52 sm:w-44 sm:h-60 md:w-82 md:h-120 rounded-3xl overflow-hidden rotate-357 translate-x-1 border-4 md:border-8 mt-auto   md:-translate-y-5.75 md:translate-x-0 bg-gray-200 ${
                title === "Social strategy"
                  ? "border-[#fa5424]"
                  : "border-white"
              }`}
            >
              <video
                src={mediaUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-md space-y-4 mt-4 md:mt-8">
            <h3
              className={`text-xl md:text-[26px] text-black/85 font-bold tracking-tighter ${textColor}`}
            >
              {description}
            </h3>
            <p
              className={`text-sm mb-6 lg:text-lg text-black/85 font-semibold tracking-tight ${textColor}`}
            >
              {subtext}
            </p>
            <MotionLink href="/" className="group inline-flex items-center">
              <motion.div
                className={`flex items-center tracking-tight text-black/80 font-bold text-[16px] p-1 pl-2 rounded-xl! cursor-pointer ${buttonColor} ${
                  title === "Social strategy" ? "text-white" : "text-black"
                }`}
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
                <span className="text-[17px]">
                  Meer over {title.toLowerCase()}
                </span>
                <ArrowRight
                  strokeWidth={2.5}
                  className={`p-2 ml-1 bg-black rounded-lg ${
                    title === "Social strategy"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                  size={34}
                />
              </motion.div>
            </MotionLink>
          </div>
        </div>

        {/* Right Side */}
        <div className="absolute right-6 top-6 md:static flex flex-col items-end justify-between h-full pointer-events-none">
          <span
            className={`text-5xl md:text-[6rem] font-bold opacity-10 ${textColor} leading-none`}
          >
            {id}
          </span>

          {/* md + lg Video Frame */}
          <div
            className={`relative hidden md:block w-36 h-52 sm:w-44 sm:h-60 md:w-82 md:h-120 rounded-3xl overflow-hidden rotate-3 border-4.5 md:border-10 mt-auto translate-y-8 translate-x-4 md:-translate-y-5.75 md:translate-x-0 bg-gray-200 ${
              title === "Social strategy" ? "border-[#fa5424]" : "border-white"
            }`}
          >
            <video
              src={mediaUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
