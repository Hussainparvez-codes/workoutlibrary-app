"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Flame,
  Star,
  Bookmark,
  CalendarPlus,
  Check,
} from "lucide-react";
import { Workout } from "@/types/workout";
import { useWorkout } from "@/context/WorkoutContext";
import { toast } from "react-toastify";

interface WorkoutDetailsClientProps {
  workout: Workout;
}

export default function WorkoutDetailsClient({
  workout,
}: WorkoutDetailsClientProps) {
  const {
    todayPlan,
    savedWorkouts,
    addToPlan,
    removeFromPlan,
    saveWorkout,
    removeSaved,
  } = useWorkout();

  const isInPlan = todayPlan.some((item) => item.id === workout.id);
  const isSaved = savedWorkouts.some((item) => item.id === workout.id);

  // Maximum 5 lifts in today's plan
  const planLimitReached = todayPlan.length >= 5 && !isInPlan;

  const handleAddToPlan = () => {
    if (isInPlan) {
      removeFromPlan(workout.id);
      toast.info("Removed from today's plan");
      return;
    }

    if (todayPlan.length >= 5) {
      toast.info("Today's plan can contain up to 5 lifts");
      return;
    }

    addToPlan(workout);
    toast.success("Added to today's plan");
  };

  const handleSave = () => {
    if (isSaved) {
      removeSaved(workout.id);
      toast.info("Removed from saved workouts");
    } else {
      saveWorkout(workout);
      toast.success("Saved for later");
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-5 pb-16 pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <Link
          href="/#library"
          className="mb-6 inline-flex items-center gap-2 text-xs text-[#85878b] transition hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Library
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8">
          {/* IMAGE */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[#24262b] bg-[#15171c] lg:aspect-auto lg:min-h-[570px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* DETAILS */}
          <div className="flex min-w-0 flex-col justify-start pt-1">
            <h1 className="font-[Oswald] text-[34px] font-bold leading-[1.05] text-white sm:text-[38px]">
              {workout.name}
            </h1>

            <p className="mt-3 max-w-xl font-[Inter] text-[11px] leading-[17px] text-[#85878b] sm:text-xs">
              {workout.description}
            </p>

            {/* MUSCLE TAGS */}
            <div className="mt-6 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#1b2610] px-2.5 py-1 font-[Inter] text-[9px] font-semibold text-[#c2f800]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* WORKOUT INFO */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#24262b] bg-[#15171c]">
              <div className="flex items-center justify-between border-b border-[#24262b] px-4 py-2.5">
                <span className="font-[Inter] text-[8px] font-medium uppercase tracking-[0.08em] text-[#85878b]">
                  Equipment
                </span>

                <span className="font-[Inter] text-[9px] font-medium text-white">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#24262b] px-4 py-2.5">
                <span className="font-[Inter] text-[8px] font-medium uppercase tracking-[0.08em] text-[#85878b]">
                  Difficulty
                </span>

                <span className="font-[Inter] text-[9px] font-medium text-white">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#24262b] px-4 py-2.5">
                <span className="font-[Inter] text-[8px] font-medium uppercase tracking-[0.08em] text-[#85878b]">
                  Sets
                </span>

                <span className="font-[Inter] text-[9px] font-medium text-white">
                  {workout.sets}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#24262b] px-4 py-2.5">
                <span className="font-[Inter] text-[8px] font-medium uppercase tracking-[0.08em] text-[#85878b]">
                  Reps
                </span>

                <span className="font-[Inter] text-[9px] font-medium text-white">
                  {workout.reps}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#24262b] px-4 py-2.5">
                <span className="font-[Inter] text-[8px] font-medium uppercase tracking-[0.08em] text-[#85878b]">
                  Duration
                </span>

                <span className="flex items-center gap-1 font-[Inter] text-[9px] font-medium text-white">
                  <Clock className="h-3 w-3 text-[#c2f800]" />
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-2.5">
                <span className="font-[Inter] text-[8px] font-medium uppercase tracking-[0.08em] text-[#85878b]">
                  Calories
                </span>

                <span className="flex items-center gap-1 font-[Inter] text-[9px] font-medium text-white">
                  <Flame className="h-3 w-3 text-[#c2f800]" />
                  {workout.caloriesBurned} kcal
                </span>
              </div>
            </div>

            {/* RATING */}
            <div className="mt-4 flex items-center gap-2">
              <Star className="h-4 w-4 fill-[#c2f800] text-[#c2f800]" />

              <span className="font-[Inter] text-xs font-semibold text-white">
                {workout.rating}
              </span>

              <span className="font-[Inter] text-[10px] text-[#85878b]">
                Rating
              </span>
            </div>

            {/* INSTRUCTIONS */}
            <section className="mt-5">
              <h2 className="font-[Oswald] text-[18px] font-bold text-white">
                HOW TO PERFORM
              </h2>

              <div className="mt-3 space-y-2">
                {workout.instructions.slice(0, 4).map((instruction, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c2f800] font-[Inter] text-[8px] font-bold text-black">
                      {index + 1}
                    </div>

                    <p className="font-[Inter] text-[9px] leading-[15px] text-[#b5b6b8]">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ACTION BUTTONS */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleAddToPlan}
                disabled={planLimitReached}
                className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 font-[Inter] text-[9px] font-bold transition ${
                  planLimitReached
                    ? "cursor-not-allowed bg-[#30352a] text-[#6f7468]"
                    : "bg-[#c2f800] text-black hover:bg-[#d2ff22]"
                }`}
              >
                {isInPlan ? (
                  <>
                    <Check className="h-3 w-3" />
                    In today&apos;s plan
                  </>
                ) : planLimitReached ? (
                  "Plan Full (5/5)"
                ) : (
                  <>
                    <CalendarPlus className="h-3 w-3" />
                    Add to today&apos;s plan
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center gap-1.5 rounded-md border border-[#36383e] bg-[#15171c] px-4 py-2.5 font-[Inter] text-[9px] font-medium text-white transition hover:border-[#c2f800] hover:text-[#c2f800]"
              >
                {isSaved ? (
                  <>
                    <Check className="h-3 w-3" />
                    Saved
                  </>
                ) : (
                  <>
                    <Bookmark className="h-3 w-3" />
                    Save for later
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}