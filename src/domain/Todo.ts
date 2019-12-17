import { User } from 'domain/User';

export interface Todo {
    userId: number;
    id: string;
    title: string;
    completed: boolean;
    user?: User;
}
