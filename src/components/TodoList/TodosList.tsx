import { TodoC } from 'components/Todo/Todo';
import { Todo } from 'domain/Todo';
import * as React from 'react';
import styles from './TodoList.css';

interface ITodosListProps {
    todos: Todo[];
    toggleTodo: (todoId: string) => void;
}

export class TodosList extends React.Component<ITodosListProps> {
    public render() {
        const { todos, toggleTodo } = this.props;
        return (
            <ul className={styles.todoList}>
                {todos.map((todo) => (
                    <li className={styles.todoItem} key={todo.id}>
                        <TodoC {...todo} toggleTodo={toggleTodo}/>
                    </li>
                ))}
            </ul>
        );
    }
}
