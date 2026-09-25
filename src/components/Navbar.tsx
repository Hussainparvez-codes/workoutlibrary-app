"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#1c1d20] bg-[#0b0c0e]">
      {/* Main Navbar */}
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-1.5"
        >
          <Image
            src={logo}
            alt="FitLog Logo"
            width={22}
            height={22}
            priority
            className="h-[22px] w-[22px]"
          />

          <span className="font-[Oswald] text-[11px] font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/"
            className="rounded-full bg-[#1b2610] px-3 py-1 text-[9px] font-medium text-[#c2f800] transition hover:bg-[#253716]"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-2 py-1 text-[9px] font-medium text-[#85878b] transition hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Desktop Counters */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-[8px] font-medium text-[#b5b6b8] transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-[13px] w-[13px] items-center justify-center rounded-full bg-[#c2f800] text-[7px] font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-[8px] font-medium text-[#85878b] transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-[13px] w-[13px] items-center justify-center rounded-full border border-[#303238] text-[7px] text-[#b5b6b8]">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-7 w-7 flex-col items-center justify-center gap-[3px] rounded-md border border-[#292b30] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="block h-[1px] w-3.5 bg-white" />
          <span className="block h-[1px] w-3.5 bg-white" />
          <span className="block h-[1px] w-3.5 bg-white" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-5 top-14 z-50 w-40 rounded-xl border border-[#1c1d20] bg-[#111214] p-2 shadow-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {/* Workouts */}
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-[10px] font-medium text-[#c2f800] transition hover:bg-[#1b2610]"
            >
              Workouts
            </Link>

            {/* My Plan */}
            <Link
              href="/my-plan"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-[10px] font-medium text-[#85878b] transition hover:bg-[#18191b] hover:text-white"
            >
              My Plan
            </Link>

            {/* Divider */}
            <div className="my-1 h-px bg-[#1c1d20]" />

            {/* Plan */}
            <Link
              href="/my-plan"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-[10px] text-[#b5b6b8] transition hover:bg-[#18191b]"
            >
              <span>Plan</span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c2f800] text-[8px] font-bold text-black">
                0
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-[10px] text-[#85878b] transition hover:bg-[#18191b] hover:text-white"
            >
              <span>Saved</span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#303238] text-[8px] text-[#b5b6b8]">
                0
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}