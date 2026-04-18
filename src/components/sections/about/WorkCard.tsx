"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

interface WorkCardProps {
  image: string;
  video: string;
  title: string;
  brand: string;
  bgColor: string;
  color: string;
}

export function WorkCard({
  image,
  video,
  title,
  brand,
  color,
  bgColor,
}: WorkCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const playPromiseRef = useRef<Promise<void> | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      playPromiseRef.current = videoRef.current.play();

      playPromiseRef.current.catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Video play failed:", error);
        }
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    if (videoRef.current) {
      if (playPromiseRef.current !== null) {
        playPromiseRef.current
          .then(() => {
            videoRef.current?.pause();
            if (videoRef.current) videoRef.current.currentTime = 0;
          })
          .catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group cursor-pointer rounded-[2.5rem] overflow-hidden border-8 hover:-rotate-2 transition-all duration-300 ${color} aspect-4/5`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
        />
      </div>

      {/* Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Angled Label Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div
          className="relative overflow-hidden rounded-2xl p-5 pt-16 shadow-xl transition-transform duration-100 "
          style={{
            backgroundColor: bgColor,
            clipPath: "url(#ticketShape)",
          }}
        >
          {/* Arrow Icon */}
          <div className="absolute top-4 right-1.5 bg-white rounded-full p-2.5 overflow-hidden">
            <motion.div
              initial={false}
              animate={
                isHovered
                  ? {
                      x: [0, 25, -25, 0],
                      y: [0, -25, 25, 0],
                    }
                  : {
                      x: 0,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                times: [0, 0.4, 0.41, 1],
              }}
            >
              <ArrowUpRight
                size={24}
                strokeWidth={2.3}
                className="text-black"
              />
            </motion.div>
          </div>

          <h3 className="text-white text-xl md:text-2xl font-bold leading-tight pr-10">
            {title}
          </h3>

          <div className="mt-3 inline-block px-3 py-2 bg-white/20 rounded-lg text-white text-base font-bold backdrop-blur-md">
            {brand}
          </div>
        </div>
      </div>

      {/* Hidden SVG Definition for the Mask */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="ticketShape" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,0.3 
                 Q 0,0.26 0.04,0.25 
                 L 0.88,0.05 
                 Q 1,0.02 1,0.18 
                 L 1,1 
                 L 0,1 
                 Z"
            />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}
