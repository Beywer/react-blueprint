import {ITodo} from 'domain/ITodo';

export function fetchAllTodos(): Promise<ITodo[]> {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then((resp: Response) => resp.json());
}
