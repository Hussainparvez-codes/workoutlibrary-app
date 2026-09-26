import { notFound } from "next/navigation";
import { getWorkout } from "@/lib/api";
import WorkoutDetailsClient from "./WorkoutDetailsClient";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  try {
    const workout = await getWorkout(Number(id));

    return <WorkoutDetailsClient workout={workout} />;
  } catch (error) {
    console.error("Failed to load workout:", error);
    notFound();
  }
}