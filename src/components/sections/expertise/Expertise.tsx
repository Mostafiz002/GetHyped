"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/motion"; // Using motion(Link) as we did before
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const EXPERTISES = [
  {
    id: "01",
    title: "Social strategy",
    tag: "Expertise",
    description: "Slimme strategie. Sterke start.",
    subtext: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    color: "bg-white",
    textColor: "text-[#161616]",
    buttonColor: "bg-[#FF5F2E]",
    image: "/images/strategy.png", // Replace with your paths
  },
  {
    id: "02",
    title: "Content creation",
    tag: "Expertise",
    description: "Content die opvalt en raakt.",
    subtext: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    color: "bg-[#F3B8FF]",
    textColor: "text-[#161616]",
    buttonColor: "bg-[#161616]",
    image: "/images/content.png",
  },
  {
    id: "03",
    title: "Content creation",
    tag: "Expertise",
    description: "Content die opvalt en raakt.",
    subtext: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    color: "bg-[#F3B8FF]",
    textColor: "text-[#161616]",
    buttonColor: "bg-[#161616]",
    image: "/images/content.png",
  },
  // ... add 03 and 04 here
];

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-[#f9f5f0]">
      <Container>
        <div className="flex flex-col gap-10">
          {EXPERTISES.map((expertise, index) => (
            <Card key={expertise.id} {...expertise} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Card({ title, id, tag, description, subtext, color, textColor, buttonColor, image, index }: any) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // This creates the "stacking" scale effect for the card underneath
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9 + index * 0.02]);

  return (
    <div 
      ref={container} 
      className="h-screen flex items-center justify-center sticky top-12 md:top-0"
    >
      <motion.div
        style={{ scale }}
        className={`relative w-full h-[100%] ${color} rounded-[30px] p-8 md:p-16 flex flex-col md:flex-row justify-between overflow-hidden shadow-xl`}
      >
        {/* Left Side */}
        <div className="flex flex-col justify-between z-10 md:w-2/3">
          <div>
            <span className="px-3 py-1 rounded-md bg-black/5 text-sm font-medium mb-4 inline-block">
              {tag}
            </span>
            <h2 className={`text-[3.5rem] md:text-[6rem] font-bold leading-none ${textColor} tracking-tighter`}>
              {title}
            </h2>
          </div>

          <div className="max-w-md space-y-6">
            <h3 className={`text-xl md:text-2xl font-bold ${textColor}`}>
              {description}
            </h3>
            <p className={`text-lg opacity-80 ${textColor}`}>
              {subtext}
            </p>
            
            {/* Using the waterfall button style from before */}
            <button className={`flex items-center gap-2 ${buttonColor} text-white px-6 py-3 rounded-full font-bold group overflow-hidden`}>
               Meer over {title.toLowerCase()}
               <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Side: Image/Number */}
        <div className="absolute right-10 top-10 md:static flex flex-col items-end justify-between">
          <span className={`text-7xl md:text-9xl font-bold opacity-10 ${textColor}`}>
            {id}
          </span>
          <div className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden rotate-3 border-4 border-white shadow-2xl mt-auto">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}