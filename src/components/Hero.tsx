import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png";

export default function Hero() {
  return (
    <section className="bg-[#0b0c0e] pb-10 pt-[98px]">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex min-h-[440px] items-center overflow-hidden rounded-2xl border border-[#24262b] bg-[#15171c] px-10">
          
          {/* Left Content */}
          <div className="w-[720px] shrink-0">
            <p className="mb-6 font-[Oswald] text-[13px] font-semibold tracking-[0.18em] text-[#c2f800]">
              WORKOUT LIBRARY
            </p>

            <h1 className="font-[Oswald] text-[60px] font-extrabold leading-[60px] tracking-normal text-white">
              TRAIN WITH INTENT. LOG
              <br />
              EVERY SET.
            </h1>

            <p className="mt-6 w-[521px] font-[Inter] text-[20px] font-normal leading-[28px] text-[#85878b]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              <br />
              into today's plan, and watch the week's work add up.
            </p>

            <Link
              href="#library"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#c2f800] px-5 py-2.5 text-[16px] font-bold text-black transition hover:bg-[#d2ff22]"
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          {/* Right Banner */}
          <div className="ml-auto flex h-full flex-1 translate-y-1 items-center justify-end">
            <Image
              src={banner}
              alt="Workout exercise"
              priority
              className="h-[330px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}