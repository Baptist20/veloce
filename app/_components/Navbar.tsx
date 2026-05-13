import { jaroFont } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "FIND US", href: "/find-us" },
    { name: "CONTACT", href: "https://wa.me/2347067562814" },
  ];

  return (
    <nav className="flex justify-between py-5 px-7.5 w-full md:py-2.5  md:items-center z-20 bg-white">
      {/* LOGO */}

      <Link
        href={"/"}
        className={`${jaroFont.className} text-[54px] leading-11.25 tracking-tighter uppercase`}
      >
        veloce
      </Link>

      {/* LINKS */}
      <ul className="flex flex-col justify-center items-end gap-2.5 md:flex-row md:items-center md:gap-6.5 ">
        {navLinks.map((link) => (
          <Link
            className={`${jaroFont.className} text-[16px] uppercase md:text-2xl md:leading-8.25 md:tracking-[-0.01em] lg:text-[26px] lg:leading-9`}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
