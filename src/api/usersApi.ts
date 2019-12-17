import { IUser } from 'domain/IUser';

export function getAllUsers(): Promise<IUser[]> {
    return fetch('https://jsonplaceholder.typicode.com/users').then((resp: Response) =>
        resp.json(),
    );
}
