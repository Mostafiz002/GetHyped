"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const FOOTER_LINKS = [
  { name: "Expertises", href: "/" },
  { name: "Work", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];

const SOCIALS = [
  { icon: <FaLinkedinIn size={16} />, href: "#" },
  { icon: <FaTiktok size={16} />, href: "#" },
  { icon: <FaInstagram size={16} />, href: "#" },
  { icon: <FaYoutube size={16} />, href: "#" },
];

export default function FooterMain() {
  return (
    <footer className="bg-[#e7e3d6] max-w-377.5 mx-auto rounded-t-[20px] relative z-20 pb-4 px-6 md:px-8">
      {/* Container: Stacked on mobile, side-by-side on desktop */}
      <div className="pt-16 md:pt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
        
        {/* Left Side: Branding */}
        <div className="w-full md:w-1/3">
          <div className="relative w-[180px] md:w-[280px]">
            <Image
              src="/images/logo.svg"
              width={280}
              height={280}
              alt="Get Hyped Logo"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side: Navigation & Info */}
        <div className="w-full md:w-auto flex flex-col gap-10 md:pr-12">
          <div className="flex flex-col md:flex-row gap-10 md:gap-24 items-start md:items-end">
            
            {/* Nav & Socials */}
            <div className="flex flex-col gap-8">
              {/* Navigation Pills */}
              <div className="flex flex-wrap gap-2.5 max-w-[300px] md:max-w-none">
                {FOOTER_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-3 py-1.5 bg-white rounded-[8px] font-semibold text-sm text-black/90 hover:bg-black hover:text-white transition-all whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Socials */}
              <div className="flex flex-row items-center gap-4">
                <span className="font-bold text-black/90">Follow us</span>
                <div className="flex gap-2">
                  {SOCIALS.map((social, i) => (
                    <Link
                      key={i}
                      href={social.href}
                      className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col gap-6 md:gap-4">
              <div className="flex flex-col">
                <span className="font-bold mb-1">Contact</span>
                <Link
                  href="mailto:info@gethyped.nl"
                  className="hover:underline text-[13px] font-medium text-black/80"
                >
                  info@gethyped.nl
                </Link>
                <span className="text-[13px] font-medium text-black/80">
                  +31 6 1533 7496
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold mb-1">Address</span>
                <p className="text-[13px] font-medium text-black/80 leading-relaxed">
                  Beltrumsestraat 6,
                  <br /> 7141 AL Groenlo
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center pt-8 border-t border-black/5 text-[11px] text-black/60">
            <div className="flex gap-4">
              <span>© 2026 Get Hyped</span>
              <span>© Design by Dylan</span>
            </div>
            <Link href="/" className="hover:underline">
              Privacyvoorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}