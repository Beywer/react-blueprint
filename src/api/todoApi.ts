import { ITodo } from 'domain/ITodo';

export function getAllTodos(): Promise<ITodo[]> {
    return fetch('https://jsonplaceholder.typicode.com/todos').then((resp: Response) =>
        resp.json(),
    );
}
