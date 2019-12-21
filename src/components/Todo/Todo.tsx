import cn from 'classnames';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { Todo } from 'domain/Todo';
import * as React from 'react';
import styles from './Todo.css';

type Props = Todo & {
    toggleTodo: (todoId: string) => void;
};

export class TodoC extends React.Component<Props> {
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
