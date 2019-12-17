import { User } from 'domain/User';

export function getAllUsers(): Promise<User[]> {
    return fetch('https://jsonplaceholder.typicode.com/users').then((resp: Response) =>
        resp.json(),
    );
}
