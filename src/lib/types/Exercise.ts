export interface Exercise {
    name: string;
    id: string;
    children?: Exercise[];
    color?: string;
    difficulty?: number;
    description?: string;
    icon?: string;
}
