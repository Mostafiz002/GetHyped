"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Expertises", href: "#expertises" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const MotionLink = motion(Link);

// --- Animation Variants ---
const overlayVariants: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { type: "tween", ease: "easeInOut", duration: 0.3 },
  },
};

const linkVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0, y: -100 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.7,
    },
  },
};

const ctaVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.6,
    },
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-1000 pt-4 pb-4 bg-transparent">
      <Container className="flex justify-between items-center px-6 relative z-110">
        <Link href="/" className="shrink-0 relative z-120" onClick={closeMenu}>
          <Image
            src="/images/gethypedlogo.svg"
            alt="Get Hyped Logo"
            width={150}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Center Nav */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
          <nav className="flex items-center gap-1 bg-white p-1 rounded-[14px] border border-black/5 z-50">
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
                  <motion.div
                    variants={{ initial: { y: "100%" }, hover: { y: "0%" } }}
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

        {/* Desktop CTA */}
        <div className="hidden lg:block shrink-0 z-50">
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
            whileTap={{ skewY: 3, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Get Results
            <img
              src="https://img.icons8.com/3d-fluency/94/fire-element--v2.png"
              className="w-9 h-9 p-1.5 ml-1 bg-white rounded-[10px]"
              alt="Fire"
            />
          </MotionLink>
        </div>

        {/* Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden relative z-120 p-3 rounded-xl  active:scale-95 transition-transform ${isOpen ? "bg-white" : " bg-[#fcb8fa]"}`}
        >
          {isOpen ? (
            <X size={24} className="text-black " />
          ) : (
            <Menu size={24} className="text-black" />
          )}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 rounded-2xl m-2.5 mt-3 bg-[#fcb8fa] z-100 flex flex-col items-center justify-center lg:hidden px-6"
          >
            <motion.div
              variants={ctaVariants}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 "
            >
              <Link
                href="#results"
                onClick={closeMenu}
                className="flex items-center tracking-tight gap-2 bg-black text-white font-semibold text-[24px] p-2 pl-3 rounded-[14px] cursor-pointer "
              >
                Get Results
                <img
                  src="https://img.icons8.com/3d-fluency/94/fire-element--v2.png"
                  className="w-12 h-12 p-2  bg-white rounded-[10px]"
                  alt="Fire"
                />
              </Link>
            </motion.div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-2.25 w-full items-center mb-16">
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.name}
                  variants={linkVariants}
                  className="shrink-0"
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="inline-block bg-white px-5.5 py-3.5 text-center rounded-2xl text-[28px] font-semibold text-black active:scale-95 transition-transform"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
