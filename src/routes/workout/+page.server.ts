import { prisma } from "@/lib/server/prisma";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    const workoutDays = await prisma.workoutDay.findMany({
        include: {
            exercises: {
                include: {
                    progressions: true,
                },
            },
        },
    });

    return { workoutDays };
}) satisfies PageServerLoad;
