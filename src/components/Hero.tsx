import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png";

export default function Hero() {
  return (
    <section className="bg-[#0b0c0e] px-5 pb-10 pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex min-h-[440px] flex-col items-center overflow-hidden rounded-2xl border border-[#24262b] bg-[#15171c] px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:flex-row lg:py-0">

          {/* Left Content */}
          <div className="w-full shrink-0 text-center lg:w-[720px] lg:text-left">

            {/* Eyebrow */}
            <p className="mb-5 font-[Oswald] text-[12px] font-semibold tracking-[0.18em] text-[#c2f800] sm:text-[13px]">
              WORKOUT LIBRARY
            </p>

            {/* Heading */}
            <h1 className="font-[Oswald] text-[38px] font-extrabold leading-[42px] tracking-normal text-white sm:text-[48px] sm:leading-[50px] md:text-[56px] md:leading-[58px] lg:text-[60px] lg:leading-[60px]">
              TRAIN WITH INTENT. LOG
              <br className="hidden sm:block" />
              EVERY SET.
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 w-full max-w-[521px] font-[Inter] text-[16px] font-normal leading-[25px] text-[#85878b] sm:mt-6 sm:text-[18px] sm:leading-[27px] md:text-[20px] md:leading-[28px] lg:mx-0">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            {/* Button */}
            <Link
              href="#library"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#c2f800] px-5 py-2.5 text-[15px] font-bold text-black transition hover:bg-[#d2ff22] sm:text-[16px]"
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          {/* Right Banner */}
          <div className="mt-12 flex w-full flex-1 items-center justify-center sm:mt-14 md:mt-16 lg:mt-0 lg:justify-end">
            <Image
              src={banner}
              alt="Workout exercise"
              priority
              className="h-auto w-[220px] object-contain sm:w-[280px] md:w-[320px] lg:h-[330px] lg:w-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}