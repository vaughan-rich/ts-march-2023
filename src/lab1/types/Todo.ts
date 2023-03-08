export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: Completed;
}

export type Completed = boolean | 'archived' | 'pending' | 'deleted';
