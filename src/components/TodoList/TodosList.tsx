import { TodoC } from 'components/Todo/Todo';
import { Todo } from 'domain/Todo';
import * as React from 'react';
import styles from './TodoList.scss';

interface Props {
    todos: Todo[];
    toggleTodo: (todoId: string) => void;
}

export const TodosList: React.FC<Props> = ({ todos, toggleTodo }) => (
    <ul className={styles.todoList}>
        {todos.map((todo) => (
            <li className={styles.todoItem} key={todo.id}>
                <TodoC {...todo} toggleTodo={toggleTodo}/>
            </li>
        ))}
    </ul>
);
