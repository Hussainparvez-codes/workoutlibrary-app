import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-[#24262b] bg-[#15171c] transition-all duration-300 hover:-translate-y-1 hover:border-[#c2f800]/40"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#111214]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Muscle Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.slice(0, 2).map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#1b2610] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[#c2f800]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="font-[Oswald] text-[22px] font-bold leading-tight text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-2 text-sm leading-5 text-[#85878b]">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between border-t border-[#24262b] pt-4 text-xs text-[#85878b]">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <Flame className="h-3.5 w-3.5" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5 text-[#c2f800]">
            <Star className="h-3.5 w-3.5 fill-current" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}