"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: "Expertises", href: "#expertises" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const MotionLink = motion(Link);

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-1000 pt-4 pb-4 bg-transparent">
      <Container className="flex justify-between items-center px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/gethypedlogo.svg"
            alt="Get Hyped Logo"
            width={150}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Center Nav */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <nav className="flex items-center gap-1 bg-white  p-1 rounded-[14px] border border-black/5  z-50">
            {NAV_LINKS.map((link) => (
              <motion.div
                key={link.name}
                initial="initial"
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={link.href}
                  className="relative block text-[14px] py-2 px-3 font-semibold text-black transition-colors duration-300 hover:text-white z-10 overflow-hidden rounded-[10px]"
                >
                  <span className="relative z-20">{link.name}</span>

                  {/* background sliding up */}
                  <motion.div
                    variants={{
                      initial: { y: "100%" },
                      hover: { y: "0%" },
                    }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.16,
                    }}
                    className="absolute inset-0 bg-black z-10"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
        {/* CTA Button */}
        <div className="shrink-0 z-50">
          <MotionLink
            href="#results"
            className="flex items-center tracking-tight bg-[#fcb8fa] text-black/80 font-bold text-[16px] p-1 pl-2 rounded-[14px] cursor-pointer"
            whileHover={{
              skewY: -6,
              skewX: 3,
              borderRadius: "10px",
              padding: "5px",
              gap: "8px",
              paddingLeft: "8px",
            }}
            whileTap={{
              skewY: 3,
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            Get Results
            <img
              src="https://img.icons8.com/3d-fluency/94/fire-element--v2.png"
              className="w-9 h-9 p-1.5 ml-1 bg-white rounded-[10px]"
              alt="Fire"
            />
          </MotionLink>
        </div>
      </Container>
    </header>
  );
}
