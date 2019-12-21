import { TodosList } from 'components/TodoList/TodosList';
import { Todo } from 'domain/Todo';
import image from 'images/test.svg';
import * as React from 'react';
import styles from './App.css';

interface Props {
    todos: Todo[];
    toggleTodo: (todoId: string) => void;
}

export const App: React.FC<Props> = ({ todos, toggleTodo }) => (
    <div>
        <div className={styles.example}>
            <img className={styles.icon} src={image} alt="random svg icon"/>
            <h1 className={styles.text}>Type Script Todo list</h1>
        </div>
        <TodosList todos={todos} toggleTodo={toggleTodo}/>
    </div>
);

