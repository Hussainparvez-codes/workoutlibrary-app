import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0c0e] px-5 pb-16 pt-24 text-white">
      <div className="w-full max-w-xl text-center">
        <p className="font-[Oswald] text-[80px] font-bold leading-none text-[#c2f800] sm:text-[110px]">
          404
        </p>

        <h1 className="mt-4 font-[Oswald] text-3xl font-bold sm:text-4xl">
          WORKOUT NOT FOUND
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#85878b]">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#c2f800] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#d2ff22]"
          >
            <Home className="h-3.5 w-3.5" />
            GO HOME
          </Link>

          <Link
            href="/#library"
            className="inline-flex items-center gap-2 rounded-md border border-[#36383e] bg-[#15171c] px-5 py-2.5 text-xs font-semibold text-white transition hover:border-[#c2f800] hover:text-[#c2f800]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            BROWSE WORKOUTS
          </Link>
        </div>
      </div>
    </main>
  );
}