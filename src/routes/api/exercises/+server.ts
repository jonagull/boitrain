import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { prisma } from "@/lib/server/prisma";

export const GET: RequestHandler = async () => {
    const exercises = await prisma.exercise.findMany();
    return json(exercises);
};

export const POST: RequestHandler = async ({ request }) => {
    const { name } = await request.json();

    const exercise = await prisma.exercise.create({
        data: {
            name,
            checked: false,
            workoutDay: {
                connect: {
                    id: 1,
                },
            },
        },
    });

    return json(exercise);
};

export const PATCH: RequestHandler = async ({ request }) => {
    const { id, checked } = await request.json();

    const exercise = await prisma.exercise.update({
        where: { id },
        data: { checked },
    });

    return json(exercise);
};
