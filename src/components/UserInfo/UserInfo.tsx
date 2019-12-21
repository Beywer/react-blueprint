import { User } from 'domain/User';
import * as React from 'react';
import styles from './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, username, phone }) => (
    <div className={styles.userInfo}>
        <div className={styles.name}>
            {name} "{username}"
        </div>
        <div className={styles.phone}>{phone}</div>
    </div>
);
