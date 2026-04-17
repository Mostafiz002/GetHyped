"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, Variants } from "framer-motion";
import HeroVideo from "../hero/HeroVideo";


const MotionLink = motion(Link);

export default function ClientSection() {
  const text =
    "Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.";

  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, 
      },
    },
  };

  const childVariants: Variants  = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="pb-20 bg-[#f9f5f0]">
      <Container>
        {/* Parent Grid */}
        <div className="grid grid-cols-1 gap-y-20">
          {/* Row 1 */}
          <div className="grid grid-cols-12">
            <motion.h2
              className="lg:col-start-2 col-span-full lg:col-span-8 text-[2.3rem] md:text-[3.7rem] font-semibold leading-[1.06] tracking-tight text-[#161616]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} 
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={childVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-y-10">
            {/* Left Side */}
            <div className="col-span-1 md:col-span-2 flex justify-center lg:block md:self-start">
              <figure className="relative aspect-4/5 hidden md:block w-full rounded-[20px] overflow-hidden">
                <Image
                  src="/images/image2.png"
                  alt="Content Creator"
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="block self-center md:hidden relative h-100 max-w-110 w-full rounded-[18px]! rotate-4 overflow-hidden">
                <HeroVideo link="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4" />
              </div>
            </div>

            {/* Right Side */}
            <div className="md:col-span-7 lg:col-span-4 md:col-start-4 lg:col-start-5">
              <div className="space-y-6">
                <p className="text-[1.25rem] lg:text-[1.5rem] leading-tight font-semibold text-[#1a1a1a]">
                  We stoppen niet bij mooie plaatjes en vette beelden. We maken
                  het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit
                  meer content zonder strategie. Nooit meer content zonder
                  resultaat.
                </p>

                <MotionLink
                  href="/about"
                  className="group inline-flex items-center"
                >
                  <motion.div
                    className="flex items-center tracking-tight border border-black text-black/80 font-bold text-[18px] p-1 pl-2 rounded-[14px] cursor-pointer"
                    whileHover={{
                      skewY: -6,
                      skewX: 3,
                      borderRadius: "10px",
                      padding: "5px",
                      gap: "4px",
                      paddingLeft: "8px",
                    }}
                    whileTap={{ skewY: 3, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 16 }}
                  >
                    Leer ons kennen
                    <ArrowRight
                      strokeWidth={2.5}
                      className="p-2 ml-1 text-white bg-black rounded-[10px]"
                      size={38}
                    />
                  </motion.div>
                </MotionLink>
              </div>
            </div>

            {/* Bottom Right Arrow */}
            <div className="hidden md:flex md:col-start-12 lg:col-start-11 lg:col-span-1 justify-end">
              <div className="group border cursor-pointer border-black rounded-[14px] h-10.5 w-10.5 flex flex-col items-center justify-center overflow-hidden">
                <motion.div
                  className="flex flex-col items-center shrink-0"
                  initial={{ y: 20 }}
                  whileHover={{ y: -20 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="h-10.5 flex items-center justify-center shrink-0">
                    <ArrowDown size={20} className="text-orange-500" />
                  </div>

                  <div className="h-10.5 flex items-center justify-center shrink-0">
                    <ArrowDown size={20} className="text-orange-500" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
