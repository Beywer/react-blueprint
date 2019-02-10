import {IUser} from 'domain/IUser';

export function fetchAllUsers(): Promise<IUser[]> {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((resp: Response) => resp.json());
}
