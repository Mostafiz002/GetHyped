"use client";

import { ImageTrail } from "@/components/ui/image-trail";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMail } from "react-icons/io5";

const MotionLink = motion(Link);

export default function Cta() {
  const imageUrls = [
    "/images/logo1.svg",
    "/images/logo2.svg",
    "/images/logo3.svg",
    "/images/logo4.svg",
    "/images/logo1.svg",
    "/images/logo2.svg",
    "/images/logo3.svg",
    "/images/logo4.svg",
    "/images/logo1.svg",
    "/images/logo2.svg",
    "/images/logo3.svg",
    "/images/logo4.svg",
  ];

  return (
    <section className="relative overflow-hidden pt-30 lg:pt-60 pb-30 lg:pb-20 hidden md:flex flex-col items-center min-h-[600px]">
      <div className="absolute inset-0 z-0">
        <ImageTrail
          images={imageUrls}
          imageWidth={240}
          imageHeight={450}
          threshold={250}
          duration={1.2}
        />
      </div>

      <div className="relative  flex flex-col items-center">
        <h2 className="text-[60px] lg:text-[106px] tracking-tighter font-semibold -z-10">
          Let&rsquo;s Get Hyped
        </h2>

        <div className="flex flex-row gap-4 lg:gap-6 mt-6 lg:mt-0 z-10">
          <MotionLink href="/" className="group inline-flex items-center">
            <motion.div
              className="flex items-center tracking-tight text-black/80 border border-black font-bold text-[16px] p-1 pl-2 rounded-xl cursor-pointer bg-white/50 backdrop-blur-sm"
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
              <span className="text-[17px]">Mail ons direct</span>
              <IoMail
                strokeWidth={2.5}
                className="p-2 ml-1 bg-black rounded-lg text-white"
                size={34}
              />
            </motion.div>
          </MotionLink>

          <MotionLink href="/" className="group inline-flex items-center">
            <motion.div
              className="flex items-center tracking-tight text-white bg-[#fa5424] font-bold text-[16px] p-1 pl-2 rounded-xl cursor-pointer"
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
              <span className="text-[17px]">Get Results</span>
              <img
                src="https://img.icons8.com/3d-fluency/94/fire-element--v2.png"
                className="w-8.5 h-8.5 p-1.5 ml-1 bg-white rounded-[10px]"
                alt="Fire"
              />
            </motion.div>
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
