import cn from 'classnames';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { ITodo } from 'domain/ITodo';
import * as React from 'react';
import styles from './Todo.css';

type ITodoProps = ITodo & {
    toggleTodo: (todoId: string) => void;
};

export class Todo extends React.Component<ITodoProps> {
    private handleTodoClick = () => {
        this.props.toggleTodo(this.props.id);
    };

    public render() {
        const { title, completed, user } = this.props;
        return (
            <div className={styles.todo}>
                <button
                    className={cn(styles.toggleTodo, completed && styles.completed)}
                    onClick={this.handleTodoClick}
                >
                    {title}
                </button>
                {user && <UserInfo {...user} />}
            </div>
        );
    }
}
