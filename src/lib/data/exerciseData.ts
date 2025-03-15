import type { Exercise } from "../types/Exercise";

export const exerciseData: Exercise = {
    name: "Movement",
    id: "root",
    icon: "core",
    children: [
        {
            name: "Upper Body",
            id: "upper",
            color: "#FFD700", // Yellow/gold section
            children: [
                {
                    name: "Push-ups",
                    id: "pushups",
                    icon: "pushups",
                    children: [
                        {
                            name: "Wall Push-ups",
                            id: "wall-pushups",
                            children: [
                                {
                                    name: "Incline Push-ups",
                                    id: "incline-pushups",
                                    children: [
                                        {
                                            name: "Regular Push-ups",
                                            id: "regular-pushups",
                                            children: [
                                                {
                                                    name: "Diamond Push-ups",
                                                    id: "diamond",
                                                    children: [
                                                        {
                                                            name: "Archer Push-ups",
                                                            id: "archer-pushups",
                                                            children: [
                                                                {
                                                                    name: "One-arm Push-ups",
                                                                    id: "onearm",
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "Pseudo Planche Push-ups",
                                                    id: "pseudo-planche",
                                                    children: [
                                                        {
                                                            name: "Tuck Planche Push-ups",
                                                            id: "tuck-planche-pushups",
                                                            children: [
                                                                {
                                                                    name: "Advanced Tuck Planche Push-ups",
                                                                    id: "adv-tuck-planche-pushups",
                                                                    children: [
                                                                        {
                                                                            name: "Straddle Planche Push-ups",
                                                                            id: "straddle-planche-pushups",
                                                                            children:
                                                                                [
                                                                                    {
                                                                                        name: "Full Planche Push-ups",
                                                                                        id: "full-planche-pushups",
                                                                                    },
                                                                                ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Pull-ups",
                    id: "pullups",
                    icon: "pullups",
                    children: [
                        {
                            name: "Scapular Pulls",
                            id: "scapular-pulls",
                            children: [
                                {
                                    name: "Negative Pull-ups",
                                    id: "negative-pullups",
                                    children: [
                                        {
                                            name: "Regular Pull-ups",
                                            id: "regular-pullups",
                                            children: [
                                                {
                                                    name: "Wide Pull-ups",
                                                    id: "wide-pullups",
                                                    children: [
                                                        {
                                                            name: "L-sit Pull-ups",
                                                            id: "lsit-pullups",
                                                            children: [
                                                                {
                                                                    name: "Archer Pull-ups",
                                                                    id: "archer-pullups",
                                                                    children: [
                                                                        {
                                                                            name: "Typewriter Pull-ups",
                                                                            id: "typewriter-pullups",
                                                                            children:
                                                                                [
                                                                                    {
                                                                                        name: "One-arm Pull-ups",
                                                                                        id: "onearm-pullups",
                                                                                        children:
                                                                                            [
                                                                                                {
                                                                                                    name: "Muscle-ups",
                                                                                                    id: "muscleups",
                                                                                                    children:
                                                                                                        [
                                                                                                            {
                                                                                                                name: "Front Lever Pulls",
                                                                                                                id: "frontlever-pulls",
                                                                                                            },
                                                                                                        ],
                                                                                                },
                                                                                            ],
                                                                                    },
                                                                                ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Dips",
                    id: "dips",
                    icon: "dips",
                    children: [
                        {
                            name: "Bench Dips",
                            id: "bench-dips",
                            children: [
                                {
                                    name: "Negative Dips",
                                    id: "negative-dips",
                                    children: [
                                        {
                                            name: "Regular Dips",
                                            id: "regular-dips",
                                            children: [
                                                {
                                                    name: "L-sit Dips",
                                                    id: "lsit-dips",
                                                    children: [
                                                        {
                                                            name: "Ring Dips",
                                                            id: "ring-dips",
                                                            children: [
                                                                {
                                                                    name: "Korean Dips",
                                                                    id: "korean-dips",
                                                                    children: [
                                                                        {
                                                                            name: "Bulgarian Dips",
                                                                            id: "bulgarian-dips",
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: "Core & Balance",
            id: "core",
            color: "#228B22", // Green section
            children: [
                {
                    name: "Planks",
                    id: "planks",
                    icon: "planks",
                    children: [
                        {
                            name: "Regular Plank",
                            id: "regular-plank",
                            children: [
                                {
                                    name: "Side Plank",
                                    id: "side-plank",
                                    children: [
                                        {
                                            name: "Ring Plank",
                                            id: "ring-plank",
                                            children: [
                                                {
                                                    name: "RTO Support Hold",
                                                    id: "rto-support",
                                                    children: [
                                                        {
                                                            name: "Tuck Planche",
                                                            id: "tuck-planche",
                                                            children: [
                                                                {
                                                                    name: "Advanced Tuck Planche",
                                                                    id: "adv-tuck-planche",
                                                                    children: [
                                                                        {
                                                                            name: "Straddle Planche",
                                                                            id: "straddle-planche",
                                                                            children:
                                                                                [
                                                                                    {
                                                                                        name: "Full Planche",
                                                                                        id: "full-planche",
                                                                                    },
                                                                                ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "L-Sits",
                    id: "lsits",
                    icon: "lsits",
                    children: [
                        {
                            name: "Foot Supported L-sit",
                            id: "foot-support-lsit",
                            children: [
                                {
                                    name: "One Foot Supported L-sit",
                                    id: "one-foot-lsit",
                                    children: [
                                        {
                                            name: "Tucked L-sit",
                                            id: "tucked-lsit",
                                            children: [
                                                {
                                                    name: "Advanced Tuck L-sit",
                                                    id: "adv-tuck-lsit",
                                                    children: [
                                                        {
                                                            name: "One-Leg L-sit",
                                                            id: "oneleg-lsit",
                                                            children: [
                                                                {
                                                                    name: "Full L-sit",
                                                                    id: "full-lsit",
                                                                    children: [
                                                                        {
                                                                            name: "V-sit",
                                                                            id: "vsit",
                                                                            children:
                                                                                [
                                                                                    {
                                                                                        name: "Manna",
                                                                                        id: "manna",
                                                                                    },
                                                                                ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Levers",
                    id: "levers",
                    icon: "levers",
                    children: [
                        {
                            name: "Tuck Back Lever",
                            id: "tuck-back-lever",
                            children: [
                                {
                                    name: "Advanced Tuck Back Lever",
                                    id: "adv-tuck-back-lever",
                                    children: [
                                        {
                                            name: "Straddle Back Lever",
                                            id: "straddle-back-lever",
                                            children: [
                                                {
                                                    name: "Full Back Lever",
                                                    id: "full-back-lever",
                                                    children: [
                                                        {
                                                            name: "Tuck Front Lever",
                                                            id: "tuck-front-lever",
                                                            children: [
                                                                {
                                                                    name: "Advanced Tuck Front Lever",
                                                                    id: "adv-tuck-front-lever",
                                                                    children: [
                                                                        {
                                                                            name: "Straddle Front Lever",
                                                                            id: "straddle-front-lever",
                                                                            children:
                                                                                [
                                                                                    {
                                                                                        name: "Full Front Lever",
                                                                                        id: "full-front-lever",
                                                                                        children:
                                                                                            [
                                                                                                {
                                                                                                    name: "Victorian Cross",
                                                                                                    id: "victorian",
                                                                                                },
                                                                                            ],
                                                                                    },
                                                                                ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: "Lower Body",
            id: "lower",
            color: "#4169E1",
            children: [
                {
                    name: "Squats",
                    id: "squats",
                    icon: "squats",
                    children: [
                        {
                            name: "Assisted Squats",
                            id: "assisted-squats",
                            children: [
                                {
                                    name: "Regular Squats",
                                    id: "regular-squats",
                                    children: [
                                        {
                                            name: "Deep Step-ups",
                                            id: "step-ups",
                                            children: [
                                                {
                                                    name: "Bulgarian Split Squats",
                                                    id: "bulgarian",
                                                    children: [
                                                        {
                                                            name: "Beginner Shrimp Squats",
                                                            id: "beg-shrimp",
                                                            children: [
                                                                {
                                                                    name: "Intermediate Shrimp Squats",
                                                                    id: "int-shrimp",
                                                                    children: [
                                                                        {
                                                                            name: "Advanced Shrimp Squats",
                                                                            id: "adv-shrimp",
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            name: "Assisted Pistol Squats",
                                                            id: "assisted-pistol",
                                                            children: [
                                                                {
                                                                    name: "Pistol Squats",
                                                                    id: "pistol",
                                                                    children: [
                                                                        {
                                                                            name: "Weighted Pistol Squats",
                                                                            id: "weighted-pistol",
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Bridges",
                    id: "bridges",
                    icon: "bridges",
                    children: [
                        {
                            name: "Short Bridges",
                            id: "short-bridges",
                            children: [
                                {
                                    name: "Straight Bridges",
                                    id: "straight-bridges",
                                    children: [
                                        {
                                            name: "Incline Bridges",
                                            id: "incline-bridges",
                                            children: [
                                                {
                                                    name: "Head Bridges",
                                                    id: "head-bridges",
                                                    children: [
                                                        {
                                                            name: "Full Bridges",
                                                            id: "full-bridges",
                                                            children: [
                                                                {
                                                                    name: "Wall Walking Bridges",
                                                                    id: "wall-walking",
                                                                    children: [
                                                                        {
                                                                            name: "Stand-to-Stand Bridges",
                                                                            id: "stand-bridge",
                                                                            children:
                                                                                [
                                                                                    {
                                                                                        name: "Bridge Push-ups",
                                                                                        id: "bridge-pushups",
                                                                                        children:
                                                                                            [
                                                                                                {
                                                                                                    name: "One-Arm Bridges",
                                                                                                    id: "onearm-bridges",
                                                                                                },
                                                                                            ],
                                                                                    },
                                                                                ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: "Mobility & Agility",
            id: "mobility",
            color: "#87CEEB",
            children: [
                {
                    name: "Handstands",
                    id: "handstands",
                    icon: "handstands",
                    children: [
                        {
                            name: "Wall Plank",
                            id: "wall-plank",
                            children: [
                                {
                                    name: "Stomach-to-Wall Hold",
                                    id: "stomach-wall",
                                    children: [
                                        {
                                            name: "Back-to-Wall Hold",
                                            id: "back-wall",
                                            children: [
                                                {
                                                    name: "Crow Stand",
                                                    id: "crow-stand",
                                                    children: [
                                                        {
                                                            name: "Wall Handstand",
                                                            id: "wall-handstand",
                                                            children: [
                                                                {
                                                                    name: "Free Handstand",
                                                                    id: "free-handstand",
                                                                    children: [
                                                                        {
                                                                            name: "Handstand Push-ups",
                                                                            id: "handstand-pushups",
                                                                            children:
                                                                                [
                                                                                    {
                                                                                        name: "One-Arm Handstand",
                                                                                        id: "onearm-handstand",
                                                                                    },
                                                                                ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Flexibility",
                    id: "flexibility",
                    icon: "flexibility",
                    children: [
                        {
                            name: "Wrist Mobility",
                            id: "wrist-mobility",
                            children: [
                                {
                                    name: "Shoulder Mobility",
                                    id: "shoulder-mobility",
                                    children: [
                                        {
                                            name: "Basic Stretches",
                                            id: "basic-stretches",
                                            children: [
                                                {
                                                    name: "Forward Bend",
                                                    id: "forward-bend",
                                                    children: [
                                                        {
                                                            name: "Pike Stretch",
                                                            id: "pike",
                                                            children: [
                                                                {
                                                                    name: "Pancake Stretch",
                                                                    id: "pancake",
                                                                    children: [
                                                                        {
                                                                            name: "Front Splits",
                                                                            id: "front-splits",
                                                                            children:
                                                                                [
                                                                                    {
                                                                                        name: "Side Splits",
                                                                                        id: "side-splits",
                                                                                    },
                                                                                ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: "Leg Raises",
            id: "legraises",
            icon: "legraises",
            children: [
                {
                    name: "Lying Knee Raises",
                    id: "lying-knee-raises",
                    children: [
                        {
                            name: "Lying Leg Raises",
                            id: "lying-leg-raises",
                            children: [
                                {
                                    name: "Hanging Knee Raises",
                                    id: "hanging-knee",
                                    children: [
                                        {
                                            name: "Hanging Leg Raises",
                                            id: "hanging-raises",
                                            children: [
                                                {
                                                    name: "Toes-to-Bar",
                                                    id: "toes-to-bar",
                                                    children: [
                                                        {
                                                            name: "L-Sit Raises",
                                                            id: "lsit-raises",
                                                            children: [
                                                                {
                                                                    name: "V-Raises",
                                                                    id: "v-raises",
                                                                    children: [
                                                                        {
                                                                            name: "Windshield Wipers",
                                                                            id: "wipers",
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: "Running",
            id: "running",
            icon: "running",
            children: [
                {
                    name: "Walking",
                    id: "walking",
                    children: [
                        {
                            name: "Jogging",
                            id: "jogging",
                            children: [
                                {
                                    name: "Running",
                                    id: "running-basic",
                                    children: [
                                        {
                                            name: "Interval Training",
                                            id: "intervals",
                                            children: [
                                                {
                                                    name: "Sprints",
                                                    id: "sprints",
                                                    children: [
                                                        {
                                                            name: "Hill Sprints",
                                                            id: "hill-sprints",
                                                            children: [
                                                                {
                                                                    name: "Parkour Basics",
                                                                    id: "parkour",
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            name: "Long Distance",
                                            id: "distance",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
