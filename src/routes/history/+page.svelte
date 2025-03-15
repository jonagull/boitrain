<script lang="ts">
    import { Button } from "@/components/ui/button/index.js";
    import {
        Card,
        CardContent,
        CardHeader,
        CardTitle,
    } from "@/components/ui/card/index.js";

    interface Workout {
        id: number;
        name: string;
    }

    interface WorkoutsByCategory {
        [key: string]: Workout[];
    }

    interface PageData {
        workouts: any[];
        workoutsByCategory: WorkoutsByCategory;
    }

    export let data: PageData;

    // Get current month's days
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    // Create calendar grid
    const days: any[] = [];
    const workoutsByDate = new Map(
        data.workouts.map((w: any) => [new Date(w.date).toDateString(), w])
    );

    // Add empty cells for days before the 1st
    const startPadding = firstDay.getDay();
    for (let i = 0; i < startPadding; i++) {
        days.push(null);
    }

    // Add all days of the month
    for (let d = 1; d <= lastDay.getDate(); d++) {
        const date = new Date(today.getFullYear(), today.getMonth(), d);
        days.push({
            date,
            workout: workoutsByDate.get(date.toDateString()),
        });
    }

    let showAddForm = false;
    let selectedDate = new Date().toISOString().split("T")[0];
    let selectedWorkout: number | null = null;
    let duration = 30;
    let notes = "";

    async function addWorkout() {
        if (!selectedWorkout) return;

        await fetch("/api/workouts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                workoutDayId: selectedWorkout,
                duration: duration * 60, // Convert to seconds
                date: new Date(selectedDate),
                notes,
            }),
        });

        // Refresh the page to show new workout
        window.location.reload();
    }
</script>

<div class="container mx-auto p-4 max-w-4xl">
    <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold text-center">Workout History</h1>
        <Button on:click={() => (showAddForm = !showAddForm)}>
            {showAddForm ? "Cancel" : "Add Past Workout"}
        </Button>
    </div>

    {#if showAddForm}
        <Card class="mb-8">
            <CardHeader>
                <CardTitle>Log Past Workout</CardTitle>
            </CardHeader>
            <CardContent>
                <form class="space-y-4" on:submit|preventDefault={addWorkout}>
                    <div>
                        <label
                            for="workout-date"
                            class="block text-sm font-medium mb-2"
                        >
                            Date
                        </label>
                        <input
                            id="workout-date"
                            type="date"
                            bind:value={selectedDate}
                            class="w-full rounded-md border p-2"
                        />
                    </div>

                    <div>
                        <label
                            for="workout-select"
                            class="block text-sm font-medium mb-2"
                        >
                            Workout
                        </label>
                        <select
                            id="workout-select"
                            bind:value={selectedWorkout}
                            class="w-full rounded-md border p-2"
                        >
                            <option value={null}>Select a workout</option>
                            {#each Object.entries(data.workoutsByCategory) as [category, workouts]}
                                <optgroup label={category}>
                                    {#each workouts as workout (workout.id)}
                                        <option value={workout.id}
                                            >{workout.name}</option
                                        >
                                    {/each}
                                </optgroup>
                            {/each}
                        </select>
                    </div>

                    <div>
                        <label
                            for="workout-duration"
                            class="block text-sm font-medium mb-2"
                        >
                            Duration (minutes)
                        </label>
                        <input
                            id="workout-duration"
                            type="number"
                            bind:value={duration}
                            min="1"
                            class="w-full rounded-md border p-2"
                        />
                    </div>

                    <div>
                        <label
                            for="workout-notes"
                            class="block text-sm font-medium mb-2"
                        >
                            Notes
                        </label>
                        <textarea
                            id="workout-notes"
                            bind:value={notes}
                            class="w-full rounded-md border p-2"
                            rows="3"
                        ></textarea>
                    </div>

                    <Button type="submit" class="w-full">Save Workout</Button>
                </form>
            </CardContent>
        </Card>
    {/if}

    <Card class="mb-8">
        <CardHeader>
            <CardTitle>
                {today.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                })}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div class="grid grid-cols-7 gap-2">
                {#each ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as day}
                    <div
                        class="text-center text-sm font-medium text-muted-foreground"
                    >
                        {day}
                    </div>
                {/each}

                {#each days as day}
                    {#if day === null}
                        <div class="aspect-square" />
                    {:else}
                        <div
                            class="aspect-square p-1 rounded-md text-sm border
                                {day.workout
                                ? 'bg-primary/20 border-primary'
                                : 'border-muted'}"
                        >
                            <div class="font-medium">
                                {day.date.getDate()}
                            </div>
                            {#if day.workout}
                                <div class="text-xs text-muted-foreground">
                                    {day.workout.workoutDay.name}
                                </div>
                            {/if}
                        </div>
                    {/if}
                {/each}
            </div>
        </CardContent>
    </Card>

    <div class="space-y-4">
        {#each data.workouts as workout}
            <Card>
                <CardContent class="py-4">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="font-medium">
                                {workout.workoutDay.name}
                            </h3>
                            <p class="text-sm text-muted-foreground">
                                {new Date(workout.date).toLocaleDateString()}
                            </p>
                        </div>
                        <div class="text-sm text-muted-foreground">
                            {Math.floor(workout.duration / 60)} minutes
                        </div>
                    </div>
                </CardContent>
            </Card>
        {/each}
    </div>
</div>
