"use client";

import { useEffect, useState } from "react";
import { getWorkouts } from "@/lib/api";
import { Workout } from "@/types/workout";
import WorkoutCard from "@/components/WorkoutCard";

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load workouts.");
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  return (

    <section
      id="library"
      className="bg-[#0b0c0e] px-5 pt-2 pb-16 sm:pt-3 sm:pb-20"
      >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="font-[Oswald] text-3xl font-bold text-white sm:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-sm text-[#85878b] sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex min-h-40 items-center justify-center">
            <p className="text-sm text-[#85878b]">
              Loading workouts...
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="flex min-h-40 items-center justify-center">
            <p className="text-sm text-red-400">
              {error}
            </p>
          </div>
        )}

        {/* Workout Cards */}
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}