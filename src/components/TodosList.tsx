import {ITodo} from 'domain/ITodo';
import * as React from 'react';

interface ITodosListProps {
    todos: ITodo[];
}

export class TodosList extends React.Component<ITodosListProps> {
    public render() {
        const {todos} = this.props;
        return (
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        );
    }
}
