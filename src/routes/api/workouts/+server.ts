import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { prisma } from "@/lib/server/prisma";

export const POST: RequestHandler = async ({ request }) => {
    const { workoutDayId, duration, date, notes } = await request.json();

    const history = await prisma.workoutHistory.create({
        data: {
            workoutDayId,
            duration,
            date: new Date(date),
            notes,
        },
    });

    return json(history);
};
