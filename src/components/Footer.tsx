import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#1c1d20] bg-[#0b0c0e]">
      <div className="mx-auto flex min-h-[58px] max-w-7xl items-center justify-between px-5">

        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog"
            width={24}
            height={24}
            className="h-6 w-auto"
          />

          <span className="font-[Oswald] text-[11px] font-bold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-[9px] text-[#85878b]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}