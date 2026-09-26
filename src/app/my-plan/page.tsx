"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Eye, Flame, X } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useWorkout } from "@/context/WorkoutContext";

type SortOption = "duration" | "calories" | "rating";

export default function MyPlanPage() {
  const {
    todayPlan,
    savedWorkouts,
    removeFromPlan,
    removeSaved,
    markAsDone,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const currentWorkouts =
    activeTab === "plan" ? todayPlan : savedWorkouts;

  const sortedWorkouts = useMemo(() => {
    return [...currentWorkouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  }, [currentWorkouts, sortBy]);

  const totalExercises = todayPlan.length;

  const totalMinutes = todayPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const handleMarkAsDone = (id: number) => {
    markAsDone(id);
    toast.success("Workout marked as done");
  };

  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.info("Removed from today's plan");
    } else {
      removeSaved(id);
      toast.info("Removed from saved workouts");
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-5 pb-16 pt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div>
          <h1 className="font-[Oswald] text-3xl font-bold sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-[#85878b]">
            Build your workout plan and keep track of your saved exercises.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#24262b] bg-[#15171c] p-5">
            <p className="text-[10px] uppercase tracking-[0.12em] text-[#85878b]">
              Exercises
            </p>

            <p className="mt-2 font-[Oswald] text-3xl font-bold text-[#c2f800]">
              {totalExercises}
            </p>
          </div>

          <div className="rounded-xl border border-[#24262b] bg-[#15171c] p-5">
            <p className="text-[10px] uppercase tracking-[0.12em] text-[#85878b]">
              Minutes
            </p>

            <p className="mt-2 font-[Oswald] text-3xl font-bold text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-xl border border-[#24262b] bg-[#15171c] p-5">
            <p className="text-[10px] uppercase tracking-[0.12em] text-[#85878b]">
              Calories
            </p>

            <p className="mt-2 font-[Oswald] text-3xl font-bold text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-8 flex items-center justify-between border-b border-[#24262b]">
          <div className="flex">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`border-b-2 px-4 pb-3 pt-2 text-[10px] font-semibold transition ${
                activeTab === "plan"
                  ? "border-[#c2f800] text-white"
                  : "border-transparent text-[#85878b] hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`border-b-2 px-4 pb-3 pt-2 text-[10px] font-semibold transition ${
                activeTab === "saved"
                  ? "border-[#c2f800] text-white"
                  : "border-transparent text-[#85878b] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 pb-3">
            <span className="text-[9px] text-[#85878b]">Sort By</span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as SortOption)
              }
              className="rounded-md border border-[#2d3035] bg-[#15171c] px-2 py-1 text-[9px] text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Workout List */}
        <div className="mt-5 space-y-3">
          {sortedWorkouts.length === 0 ? (
            <div className="rounded-xl border border-[#24262b] bg-[#15171c] px-6 py-16 text-center">
              <h2 className="font-[Oswald] text-xl font-bold">
                {activeTab === "plan"
                  ? "YOUR PLAN IS EMPTY"
                  : "NO SAVED WORKOUTS"}
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm text-[#85878b]">
                {activeTab === "plan"
                  ? "Browse the workout library and add exercises to today's plan."
                  : "Save workouts from the library to find them here later."}
              </p>

              <Link
                href="/#library"
                className="mt-5 inline-flex rounded-md bg-[#c2f800] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#d2ff22]"
              >
                BROWSE WORKOUTS
              </Link>
            </div>
          ) : (
            sortedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="overflow-hidden rounded-xl border border-[#24262b] bg-[#15171c] transition hover:border-[#363a40]"
              >
                <div className="flex items-center gap-4 p-3">
                  {/* Image */}
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-[Oswald] text-sm font-bold text-white">
                      {workout.name}
                    </h3>

                    <p className="mt-0.5 text-[10px] text-[#85878b]">
                      {workout.equipment}
                    </p>

                    <div className="mt-2 flex items-center gap-3 text-[9px] text-[#85878b]">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {workout.duration} min
                      </span>

                      <span className="flex items-center gap-1">
                        <Flame className="h-3 w-3" />
                        {workout.caloriesBurned} kcal
                      </span>

                      <span className="text-[#c2f800]">
                        ★ {workout.rating}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-2">
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="inline-flex items-center gap-1.5 rounded-md border border-[#36383e] px-3 py-2 text-[8px] font-semibold text-white transition hover:border-[#c2f800] hover:text-[#c2f800]"
                    >
                      <Eye className="h-3 w-3" />
                      View Details
                    </Link>

                    {activeTab === "plan" && (
                      <button
                        type="button"
                        onClick={() => handleMarkAsDone(workout.id)}
                        className="inline-flex items-center gap-1.5 rounded-md bg-[#c2f800] px-3 py-2 text-[8px] font-bold text-black transition hover:bg-[#d2ff22]"
                      >
                        <Check className="h-3 w-3" />
                        Mark as Done
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleRemove(workout.id)}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[#85878b] transition hover:bg-[#24262b] hover:text-red-400"
                      aria-label="Remove workout"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}