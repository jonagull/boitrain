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
    let workoutTimer: ReturnType<typeof setInterval> | null = null;
    let workoutDuration = 0;
    let currentSet = 1;
    let isResting = false;
    const REST_TIME = 90; // Rest time in seconds

    function startWorkout(workoutDay: any) {
        activeWorkout = workoutDay;
        currentExercise = 0;
        workoutDuration = 0;
        workoutTimer = setInterval(() => {
            workoutDuration++;
        }, 1000);

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

    function startSet() {
        if (isResting) {
            // End rest, start next set or move to next exercise
            isResting = false;
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
            if (currentSet > activeWorkout.exercises[currentExercise].sets) {
                nextExercise();
            }
        } else {
            // Complete set, start rest timer
            isResting = true;
            startTimer(REST_TIME);
            if (currentSet < activeWorkout.exercises[currentExercise].sets) {
                currentSet++;
            } else {
                currentSet = activeWorkout.exercises[currentExercise].sets + 1; // Mark as complete
            }
        }
    }

    function nextExercise() {
        if (timer) clearInterval(timer);
        currentExercise++;
        currentSet = 1;
        isResting = false;
    }

    function formatTime(seconds: number): string {
        return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, "0")}`;
    }

    async function finishWorkout() {
        if (workoutTimer) clearInterval(workoutTimer);

        // Save workout to history
        await fetch("/api/workouts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                workoutDayId: activeWorkout.id,
                duration: workoutDuration,
            }),
        });

        activeWorkout = null;
        workoutDuration = 0;
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
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-3xl font-bold">{activeWorkout.name}</h1>
            <div class="text-xl font-mono">
                {formatTime(workoutDuration)}
            </div>
        </div>

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
                        <div class="space-y-4">
                            <p class="text-lg">
                                Set {currentSet} of {activeWorkout.exercises[
                                    currentExercise
                                ].sets}
                                × {activeWorkout.exercises[currentExercise]
                                    .reps} reps
                            </p>

                            {#if isResting}
                                <div class="text-center">
                                    <div class="text-4xl font-mono mb-2">
                                        Rest: {formatTime(timeLeft)}
                                    </div>
                                    <Button
                                        variant="outline"
                                        class="w-full"
                                        on:click={startSet}
                                    >
                                        Skip Rest
                                    </Button>
                                </div>
                            {:else}
                                <Button class="w-full" on:click={startSet}>
                                    Complete Set
                                </Button>
                            {/if}
                        </div>
                    {:else if activeWorkout.exercises[currentExercise].duration}
                        <div class="text-4xl font-mono text-center mb-4">
                            {formatTime(timeLeft)}
                        </div>
                        <Button class="w-full" on:click={nextExercise}>
                            Complete Exercise
                        </Button>
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
        {:else}
            <Card>
                <CardContent class="text-center py-6">
                    <h2 class="text-2xl font-bold mb-4">
                        Workout Complete! 🎉
                    </h2>
                    <p class="text-lg mb-4">
                        Total time: {formatTime(workoutDuration)}
                    </p>
                    <Button on:click={finishWorkout}>Finish</Button>
                </CardContent>
            </Card>
        {/if}
    </div>
{/if}
