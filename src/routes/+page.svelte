<script lang="ts">
    import {
        Card,
        CardContent,
        CardHeader,
        CardTitle,
    } from "@/components/ui/card/index.js";
    import { Checkbox } from "@/components/ui/checkbox/index.js";
    import { Separator } from "@/components/ui/separator/index.js";

    export let data;

    async function toggleExercise(id: number, checked: boolean) {
        await fetch("/api/exercises", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, checked }),
        });

        data.workoutDays = data.workoutDays.map(
            (day: { exercises: { id: number }[] }) => ({
                ...day,
                exercises: day.exercises.map((ex: { id: number }) =>
                    ex.id === id ? { ...ex, checked } : ex
                ),
            })
        );
    }
</script>

<div class="container mx-auto p-4 max-w-4xl">
    <h1 class="text-4xl font-bold mb-8 text-center">Workout Program</h1>

    <div class="grid gap-6">
        {#each data.workoutDays as workoutDay}
            <Card>
                <CardHeader>
                    <CardTitle>{workoutDay.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="space-y-4">
                        {#each workoutDay.exercises as exercise}
                            <div class="bg-secondary/20 rounded-lg p-4">
                                <div class="flex items-center gap-4">
                                    <Checkbox
                                        checked={exercise.checked}
                                        onCheckedChange={(value) =>
                                            toggleExercise(
                                                exercise.id,
                                                value === true
                                            )}
                                    />
                                    <div class="flex-1">
                                        <h3 class="font-semibold">
                                            {exercise.name}
                                        </h3>
                                        {#if exercise.sets && exercise.reps}
                                            <p
                                                class="text-sm text-muted-foreground"
                                            >
                                                {exercise.sets} sets × {exercise.reps}
                                            </p>
                                        {:else if exercise.duration}
                                            <p
                                                class="text-sm text-muted-foreground"
                                            >
                                                {exercise.duration}
                                            </p>
                                        {/if}
                                    </div>
                                </div>

                                {#if exercise.progressions?.length}
                                    <div class="mt-3">
                                        <Separator class="my-2" />
                                        <p class="text-sm font-medium mb-2">
                                            Progressions:
                                        </p>
                                        <ol
                                            class="list-decimal list-inside space-y-1"
                                        >
                                            {#each exercise.progressions as progression}
                                                <li
                                                    class="text-sm text-muted-foreground"
                                                >
                                                    {progression.name}
                                                </li>
                                            {/each}
                                        </ol>
                                    </div>
                                {/if}
                            </div>
                        {/each}
                    </div>
                </CardContent>
            </Card>
        {/each}
    </div>
</div>
