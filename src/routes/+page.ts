import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
    const res = await fetch("/api/workoutDays");
    const workoutDays = await res.json();
    console.log(workoutDays);
    return { workoutDays };
}) satisfies PageLoad;
