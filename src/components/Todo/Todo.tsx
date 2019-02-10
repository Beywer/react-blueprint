import * as cn from 'classnames';
import {UserInfo} from 'components/UserInfo/UserInfo';
import {ITodo} from 'domain/ITodo';
import * as React from 'react';
import styles from './Todo.css';

type ITodoProps = ITodo & {
    toggleTodo: () => void;
};

export class Todo extends React.Component<ITodoProps> {
    public render() {
        const {title, completed, user, toggleTodo} = this.props;
        return (
            <div className={styles.todo}>
                <button
                    className={cn(styles.toggleTodo, completed && styles.completed)}
                    onClick={toggleTodo}
                >
                    {title}
                </button>
                <UserInfo {...user}/>
            </div>
        );
    }
}
