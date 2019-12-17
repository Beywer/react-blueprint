import { User } from 'domain/User';
import * as React from 'react';
import styles from './UserInfo.css';

export class UserInfo extends React.Component<User> {
    public render() {
        const { name, username, phone } = this.props;
        return (
            <div className={styles.userInfo}>
                <div className={styles.name}>
                    {name} "{username}"
                </div>
                <div className={styles.phone}>{phone}</div>
            </div>
        );
    }
}
