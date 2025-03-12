import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import prisma from "$lib/server/prisma";

export const GET: RequestHandler = async () => {
    try {
        const workoutDays = await prisma.workoutDay.findMany({
            include: {
                exercises: {
                    include: {
                        progressions: {
                            orderBy: {
                                order: "asc",
                            },
                        },
                    },
                    orderBy: {
                        id: "asc",
                    },
                },
            },
            orderBy: {
                id: "asc",
            },
        });

        console.log("Fetched workout days:", workoutDays);
        return json(workoutDays);
    } catch (error) {
        console.error("Database error:", error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error", details: error }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
};
