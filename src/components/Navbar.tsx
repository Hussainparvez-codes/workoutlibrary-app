"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { useWorkout } from "@/context/WorkoutContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { todayPlan, savedWorkouts } = useWorkout();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#1c1d20] bg-[#0b0c0e]">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          >
          <Image
          src={logo}
          alt="FitLog"
          className="h-7 w-auto"
          priority
          />
          <span className="font-[Oswald] text-[13px] font-bold tracking-wide text-white">
           FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">

          {/* Workouts */}
          <Link
            href="/#library"
            className="rounded-2xl bg-[#a1d513] px-4 py-[9px] text-[10px] font-semibold text-white transition hover:text-[#c2f800]"
          >
            WORKOUTS
          </Link>

          {/* My Plan */}
          <Link
            href="/my-plan"
            className="rounded-md px-4 py-[9px] text-[10px] font-semibold text-[#85878b] transition hover:text-white"
          >
            MY PLAN
          </Link>

        </div>

        {/* Desktop Status */}
        <div className="hidden items-center gap-4 md:flex">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-[9px] font-semibold text-[#85878b] transition hover:text-white"
          >
            <span>PLAN</span>

            <span className="flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-[#c2f800] px-1 text-[8px] font-bold text-black">
              {todayPlan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-[9px] font-semibold text-[#85878b] transition hover:text-white"
          >
            <span>SAVED</span>

            <span className="flex h-[20px] min-w-[20px] items-center justify-center rounded-full border border-[#36383e] px-1 text-[8px] font-bold text-white">
              {savedWorkouts.length}
            </span>
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="text-xl text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute right-5 top-[45px] w-44 rounded-lg border border-[#24262b] bg-[#15171c] p-2 shadow-xl md:hidden">

            {/* Workouts */}
            <Link
              href="/#library"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-md px-3 py-2.5 text-[10px] font-semibold text-white transition hover:bg-[#1c1f24] hover:text-[#c2f800]"
            >
              WORKOUTS
            </Link>

            {/* My Plan */}
            <Link
              href="/my-plan"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-md px-3 py-2.5 text-[10px] font-semibold text-[#85878b] transition hover:bg-[#1c1f24] hover:text-white"
            >
              MY PLAN
            </Link>

            <div className="my-2 border-t border-[#24262b]" />

            {/* Plan */}
            <Link
              href="/my-plan"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-md px-3 py-2.5 text-[10px] font-semibold text-[#85878b] transition hover:bg-[#1c1f24] hover:text-white"
            >
              <span>PLAN</span>

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#c2f800] px-1 text-[9px] font-bold text-black">
                {todayPlan.length}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-md px-3 py-2.5 text-[10px] font-semibold text-[#85878b] transition hover:bg-[#1c1f24] hover:text-white"
            >
              <span>SAVED</span>

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-[#36383e] px-1 text-[9px] font-bold text-white">
                {savedWorkouts.length}
              </span>
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
}