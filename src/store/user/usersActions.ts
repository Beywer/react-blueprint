import { getAllUsers } from 'api/usersApi';
import { User } from 'domain/User';
import { GeneralThunkAction, PayloadedAction } from 'utils/store/actionTypes';

export const SAVE_USERS = 'SAVE_USERS';

export type SaveUsersAction = PayloadedAction<User[]>;

function saveUsers(users: User[]): SaveUsersAction {
    return { type: SAVE_USERS, payload: users };
}

export type FetchAllUsersAction = GeneralThunkAction<Promise<User[]>>;

export function fetchAllUsers(): FetchAllUsersAction {
    return (dispatch) => {
        return getAllUsers().then((users: User[]) => {
            dispatch(saveUsers(users));
            return users;
        });
    };
}
