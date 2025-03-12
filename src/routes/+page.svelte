<script lang="ts">
    import { onMount } from "svelte";

    export let data; // SvelteKit injects `data` from +page.ts

    onMount(async () => {
        console.log(data);
    });

    async function toggleExercise(id: number, checked: boolean) {
        await fetch("/api/exercises", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, checked }),
        });

        // Update the exercise locally
        data.workoutDays = data.workoutDays.map(
            (day: { exercises: any[] }) => ({
                ...day,
                exercises: day.exercises.map((ex) =>
                    ex.id === id ? { ...ex, checked } : ex
                ),
            })
        );
    }
</script>

<h1>Workout Program</h1>

{#each data.workoutDays as workoutDay}
    <section class="workout-day">
        <h2>{workoutDay.name}</h2>
        <ul>
            {#each workoutDay.exercises as exercise}
                <li>
                    <div class="exercise-header">
                        <input
                            type="checkbox"
                            checked={exercise.checked}
                            on:change={() =>
                                toggleExercise(exercise.id, !exercise.checked)}
                        />
                        <strong>{exercise.name}</strong>
                        {#if exercise.sets && exercise.reps}
                            <span>{exercise.sets} sets × {exercise.reps}</span>
                        {:else if exercise.duration}
                            <span>{exercise.duration}</span>
                        {/if}
                    </div>

                    <div class="progressions">
                        <small>Progressions:</small>
                        <ol>
                            {#each exercise.progressions as progression}
                                <li>{progression.name}</li>
                            {/each}
                        </ol>
                    </div>
                </li>
            {/each}
        </ul>
    </section>
{/each}

<style>
    .workout-day {
        margin-bottom: 2rem;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
    }

    h2 {
        margin-top: 0;
        color: #2c3e50;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 1rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 4px;
    }

    .exercise-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.5rem;
    }

    .progressions {
        margin-left: 2rem;
        font-size: 0.9rem;
    }

    .progressions ol {
        margin-top: 0.25rem;
    }

    small {
        color: #666;
    }
</style>
