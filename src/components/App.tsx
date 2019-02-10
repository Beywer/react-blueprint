import {TodosList} from 'components/TodosList';
import {ITodo} from 'domain/ITodo';
import {IUser} from 'domain/IUser';
import * as React from 'react';
// import image from '../images/test.svg';
import styles from '../styles/components/App.css';

interface IAppProps {
    todos: ITodo[];
    users: IUser[];
    loadAllTodos: () => void;
    loadAllUsers: () => void;
}

export class App extends React.Component<IAppProps> {
    public componentDidMount(): void {
        setTimeout(this.props.loadAllTodos, 500);
    }

    public render() {
        const {todos} = this.props;

        return (
            <div className={styles.appRoot}>
                <TodosList todos={todos}/>
            </div>
        );
    }
}
