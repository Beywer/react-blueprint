import * as React from 'react';
import image from '../images/test.svg';
import styles from '../styles/components/App.css';

export class App extends React.Component {
    public render() {
        return (
            <div className={styles.appRoot}>
                <img
                    className={styles.icon}
                    src={image}
                    alt="test image"
                />
                <span className={styles.text}>
                    This is styled TSX component AZAZA ME!!!
                </span>
            </div>
        );
    }
}
