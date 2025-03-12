import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    await prisma.progression.deleteMany();
    await prisma.exercise.deleteMany();
    await prisma.workoutDay.deleteMany();

    // Day 1 - Upper Body Strength
    const day1 = await prisma.workoutDay.create({
        data: {
            name: "Day 1 - Upper Body Strength",
            exercises: {
                create: [
                    {
                        name: "Ring Rows",
                        sets: 3,
                        reps: "8-12",
                        progressions: {
                            create: [
                                { name: "Table Rows", order: 1 },
                                { name: "Low Ring Rows", order: 2 },
                                { name: "Feet Elevated Ring Rows", order: 3 },
                                { name: "One-Arm Ring Rows", order: 4 },
                            ],
                        },
                    },
                    {
                        name: "Push-ups",
                        sets: 3,
                        reps: "8-12",
                        progressions: {
                            create: [
                                { name: "Incline Push-ups", order: 1 },
                                { name: "Knee Push-ups", order: 2 },
                                { name: "Regular Push-ups", order: 3 },
                                { name: "Ring Push-ups", order: 4 },
                                { name: "Archer Push-ups", order: 5 },
                            ],
                        },
                    },
                    {
                        name: "Hanging Knee Raises",
                        sets: 3,
                        reps: "8-12",
                        progressions: {
                            create: [
                                { name: "Lying Leg Raises", order: 1 },
                                { name: "Hanging Knee Raises", order: 2 },
                                { name: "Hanging Leg Raises", order: 3 },
                                { name: "Toes to Bar", order: 4 },
                            ],
                        },
                    },
                ],
            },
        },
    });

    // Day 2 - Lower Body & Core
    const day2 = await prisma.workoutDay.create({
        data: {
            name: "Day 2 - Lower Body & Core",
            exercises: {
                create: [
                    {
                        name: "Bodyweight Squats",
                        sets: 3,
                        reps: "10-15",
                        progressions: {
                            create: [
                                { name: "Wall Sit", order: 1 },
                                { name: "Assisted Squats", order: 2 },
                                { name: "Regular Squats", order: 3 },
                                { name: "Bulgarian Split Squats", order: 4 },
                                { name: "Pistol Squats", order: 5 },
                            ],
                        },
                    },
                    {
                        name: "Glute Bridges",
                        sets: 3,
                        reps: "10-15",
                        progressions: {
                            create: [
                                { name: "Glute Bridge", order: 1 },
                                { name: "Single-Leg Glute Bridge", order: 2 },
                                {
                                    name: "Feet-Elevated Glute Bridge",
                                    order: 3,
                                },
                                { name: "Nordic Curls", order: 4 },
                            ],
                        },
                    },
                    {
                        name: "Plank",
                        sets: 3,
                        duration: "30-60 seconds",
                        progressions: {
                            create: [
                                { name: "Knee Plank", order: 1 },
                                { name: "Regular Plank", order: 2 },
                                { name: "Plank Shoulder Taps", order: 3 },
                                { name: "Ring Plank", order: 4 },
                            ],
                        },
                    },
                ],
            },
        },
    });

    // Day 3 - Pulling & Grip
    const day3 = await prisma.workoutDay.create({
        data: {
            name: "Day 3 - Pulling & Grip",
            exercises: {
                create: [
                    {
                        name: "Dead Hangs",
                        sets: 3,
                        duration: "20-40 seconds",
                        progressions: {
                            create: [
                                { name: "Dead Hang", order: 1 },
                                { name: "Scapular Pulls", order: 2 },
                                { name: "Active Hang", order: 3 },
                                { name: "One-Arm Hang", order: 4 },
                            ],
                        },
                    },
                    {
                        name: "Negative Pull-ups",
                        sets: 3,
                        reps: "5-8",
                        progressions: {
                            create: [
                                { name: "Negative Pull-ups", order: 1 },
                                { name: "Assisted Pull-ups", order: 2 },
                                { name: "Regular Pull-ups", order: 3 },
                                { name: "Archer Pull-ups", order: 4 },
                            ],
                        },
                    },
                    {
                        name: "Ring Bicep Curls",
                        sets: 3,
                        reps: "8-12",
                        progressions: {
                            create: [
                                { name: "Low Ring Bicep Curls", order: 1 },
                                { name: "Feet Elevated Bicep Curls", order: 2 },
                                { name: "Archer Ring Curls", order: 3 },
                            ],
                        },
                    },
                ],
            },
        },
    });

    // Day 4 - Cardio & Endurance
    const day4 = await prisma.workoutDay.create({
        data: {
            name: "Day 4 - Cardio & Endurance",
            exercises: {
                create: [
                    {
                        name: "Running",
                        duration: "20-30 minutes",
                        progressions: {
                            create: [
                                { name: "Walk", order: 1 },
                                { name: "Jog", order: 2 },
                                { name: "Run", order: 3 },
                                { name: "Intervals", order: 4 },
                                { name: "Sprints", order: 5 },
                            ],
                        },
                    },
                    {
                        name: "Jump Rope",
                        sets: 3,
                        duration: "30-60 seconds",
                        progressions: {
                            create: [
                                { name: "Single Unders", order: 1 },
                                { name: "Double Unders", order: 2 },
                                { name: "Crossovers", order: 3 },
                            ],
                        },
                    },
                ],
            },
        },
    });

    console.log("Database has been seeded! 🌱");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
