import { IUser } from 'domain/IUser';

export interface ITodo {
    userId: number;
    id: string;
    title: string;
    completed: boolean;
    user?: IUser;
}
