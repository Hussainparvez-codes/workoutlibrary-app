"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { Workout } from "@/types/workout";

interface WorkoutContextType {
  todayPlan: Workout[];
  savedWorkouts: Workout[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => void;
  removeSaved: (id: number) => void;

  markAsDone: (id: number) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

const PLAN_STORAGE_KEY = "fitlog-today-plan";
const SAVED_STORAGE_KEY = "fitlog-saved-workouts";

export function WorkoutProvider({ children }: { children: ReactNode }) {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  const [isHydrated, setIsHydrated] = useState(false);

  const hasLoadedStorage = useRef(false);

  // Load data from localStorage
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
      const storedSaved = localStorage.getItem(SAVED_STORAGE_KEY);

      if (storedPlan) {
        setTodayPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSavedWorkouts(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to load workout data:", error);
    } finally {
      hasLoadedStorage.current = true;
      setIsHydrated(true);
    }
  }, []);

  // Save today's plan
  useEffect(() => {
    if (!isHydrated || !hasLoadedStorage.current) {
      return;
    }

    localStorage.setItem(
      PLAN_STORAGE_KEY,
      JSON.stringify(todayPlan)
    );
  }, [todayPlan, isHydrated]);

  // Save saved workouts
  useEffect(() => {
    if (!isHydrated || !hasLoadedStorage.current) {
      return;
    }

    localStorage.setItem(
      SAVED_STORAGE_KEY,
      JSON.stringify(savedWorkouts)
    );
  }, [savedWorkouts, isHydrated]);

  // Add workout to today's plan
  const addToPlan = (workout: Workout) => {
  setTodayPlan((currentPlan) => {
    const alreadyExists = currentPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      return currentPlan;
    }

    // Maximum 5 lifts allowed
    if (currentPlan.length >= 5) {
      return currentPlan;
    }

    return [...currentPlan, workout];
  });
   }

  // Remove workout from today's plan
  const removeFromPlan = (id: number) => {
    setTodayPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id)
    );
  };

  // Save workout
  const saveWorkout = (workout: Workout) => {
    setSavedWorkouts((currentSaved) => {
      const alreadyExists = currentSaved.some(
        (item) => item.id === workout.id
      );

      if (alreadyExists) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  // Remove saved workout
  const removeSaved = (id: number) => {
    setSavedWorkouts((currentSaved) =>
      currentSaved.filter((workout) => workout.id !== id)
    );
  };

  // Mark workout as done
  const markAsDone = (id: number) => {
    setTodayPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id)
    );
  };

  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
        markAsDone,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("useWorkout must be used inside WorkoutProvider");
  }

  return context;
}