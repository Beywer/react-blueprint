import {TodosList} from 'components/TodosList';
import {ITodo} from 'domain/ITodo';
import * as React from 'react';
import image from '../images/test.svg';
import styles from '../styles/components/App.css';

interface IAppProps {
    todos: ITodo[];
}

export class App extends React.Component<IAppProps> {
    public render() {
        const {todos} = this.props;

        return (
            <div>
                <div className={styles.example}>
                    <img
                        className={styles.icon}
                        src={image}
                        alt="random svg icon"
                    />
                    <h1 className={styles.text}>
                        Type Script Todo list
                    </h1>
                </div>
                <TodosList todos={todos}/>
            </div>
        );
    }
}
