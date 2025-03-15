import { prisma } from "@/lib/server/prisma";
import type { PageLoad } from "../$types";

export const load = (async () => {
    const [workouts, allWorkouts] = await Promise.all([
        prisma.workoutHistory.findMany({
            include: {
                workoutDay: true,
            },
            orderBy: {
                date: "desc",
            },
        }),
        prisma.workoutDay.findMany({
            orderBy: {
                name: "asc",
            },
        }),
    ]);

    // Group workouts by category
    const workoutsByCategory = allWorkouts.reduce(
        (acc: any, workout: { category: any }) => {
            const category = workout.category;
            if (!acc[category]) acc[category] = [];
            acc[category].push(workout);
            return acc;
        },
        {}
    );

    return { workouts, workoutsByCategory };
}) satisfies PageLoad;
