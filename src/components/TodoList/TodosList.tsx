import {Todo} from 'components/Todo/Todo';
import {ITodo} from 'domain/ITodo';
import * as React from 'react';
import styles from './TodoList.css';

interface ITodosListProps {
    todos: ITodo[];
    toggleTodo: (todoId: string) => void;
}

export class TodosList extends React.Component<ITodosListProps> {
    public render() {
        const {todos, toggleTodo} = this.props;
        return (
            <ul className={styles.todoList}>
                {todos.map((todo) => (
                    <li className={styles.todoItem} key={todo.id}>
                        <Todo
                            {...todo}
                            toggleTodo={toggleTodo}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}
