import { Todo } from 'domain/Todo';

export function getAllTodos(): Promise<Todo[]> {
    return fetch('https://jsonplaceholder.typicode.com/todos').then((resp: Response) =>
        resp.json(),
    );
}
