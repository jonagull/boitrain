<script lang="ts">
    import {
        Card,
        CardContent,
        CardHeader,
        CardTitle,
    } from "@/components/ui/card/index.js";
    import { Button } from "@/components/ui/button/index.js";
    import {
        Accordion,
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
    } from "@/components/ui/accordion/index.js";

    export let data;
    let activeWorkout: any = null;
    let currentExercise = 0;
    let timer: ReturnType<typeof setInterval> | null = null;
    let timeLeft = 0;

    function startWorkout(workoutDay: any) {
        activeWorkout = workoutDay;
        currentExercise = 0;
        if (workoutDay.exercises[0].duration) {
            startTimer(parseDuration(workoutDay.exercises[0].duration));
        }
    }

    function parseDuration(duration: string): number {
        // Convert "30-60 seconds" to seconds (use minimum time)
        const match = duration.match(/(\d+)(?:-\d+)?\s*seconds?/);
        return match ? parseInt(match[1]) : 60;
    }

    function startTimer(seconds: number) {
        timeLeft = seconds;
        timer = setInterval(() => {
            timeLeft--;
            if (timeLeft <= 0) {
                clearInterval(timer!);
                timer = null;
            }
        }, 1000);
    }

    function nextExercise() {
        if (timer) clearInterval(timer);
        currentExercise++;
        if (currentExercise < activeWorkout.exercises.length) {
            const exercise = activeWorkout.exercises[currentExercise];
            if (exercise.duration) {
                startTimer(parseDuration(exercise.duration));
            }
        }
    }

    function formatTime(seconds: number): string {
        return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, "0")}`;
    }
</script>

{#if !activeWorkout}
    <div class="container mx-auto p-4 max-w-4xl">
        <h1 class="text-4xl font-bold mb-8 text-center">Start Workout</h1>
        <div class="grid gap-6">
            {#each data.workoutDays as workoutDay}
                <Accordion multiple={false}>
                    <AccordionItem value="details">
                        <Card>
                            <CardHeader class="p-0">
                                <AccordionTrigger class="px-6 py-4">
                                    <CardTitle>{workoutDay.name}</CardTitle>
                                </AccordionTrigger>
                            </CardHeader>
                            <AccordionContent>
                                <CardContent>
                                    <ul class="space-y-2">
                                        {#each workoutDay.exercises as exercise}
                                            <li>
                                                <span class="font-medium"
                                                    >{exercise.name}</span
                                                >
                                                {#if exercise.sets && exercise.reps}
                                                    <span
                                                        class="text-muted-foreground"
                                                    >
                                                        - {exercise.sets} sets ×
                                                        {exercise.reps}</span
                                                    >
                                                {:else if exercise.duration}
                                                    <span
                                                        class="text-muted-foreground"
                                                    >
                                                        - {exercise.duration}</span
                                                    >
                                                {/if}
                                            </li>
                                        {/each}
                                    </ul>
                                    <Button
                                        class="w-full mt-4"
                                        on:click={() =>
                                            startWorkout(workoutDay)}
                                    >
                                        Start Workout
                                    </Button>
                                </CardContent>
                            </AccordionContent>
                        </Card>
                    </AccordionItem>
                </Accordion>
            {/each}
        </div>
    </div>
{:else}
    <div class="container mx-auto p-4 max-w-4xl">
        <h1 class="text-3xl font-bold mb-4">{activeWorkout.name}</h1>

        {#if currentExercise < activeWorkout.exercises.length}
            <Card class="mb-6">
                <CardHeader>
                    <CardTitle
                        >{activeWorkout.exercises[currentExercise]
                            .name}</CardTitle
                    >
                </CardHeader>
                <CardContent>
                    {#if activeWorkout.exercises[currentExercise].sets && activeWorkout.exercises[currentExercise].reps}
                        <p class="text-lg mb-4">
                            {activeWorkout.exercises[currentExercise].sets} sets
                            × {activeWorkout.exercises[currentExercise].reps}
                        </p>
                    {/if}

                    {#if timer}
                        <div class="text-4xl font-mono text-center mb-4">
                            {formatTime(timeLeft)}
                        </div>
                    {/if}

                    <div class="mt-4">
                        <p class="font-medium mb-2">Current Progression:</p>
                        <p class="text-muted-foreground">
                            {activeWorkout.exercises[currentExercise]
                                .progressions[0].name}
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Button class="w-full" on:click={nextExercise}>
                Next Exercise
            </Button>
        {:else}
            <Card>
                <CardContent class="text-center py-6">
                    <h2 class="text-2xl font-bold mb-4">
                        Workout Complete! 🎉
                    </h2>
                    <Button on:click={() => (activeWorkout = null)}>
                        Finish
                    </Button>
                </CardContent>
            </Card>
        {/if}
    </div>
{/if}
