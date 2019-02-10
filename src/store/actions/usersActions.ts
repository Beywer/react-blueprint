import {getAllUsers} from 'api/usersApi';
import {IUser} from 'domain/IUser';
import {GeneralThunkAction, PayloadedAction} from 'utils/store/actionTypes';

export const SAVE_USERS = 'SAVE_USERS';

export type SaveUsersAction = PayloadedAction<IUser[]>;

function saveUsers(users: IUser[]): SaveUsersAction {
    return {type: SAVE_USERS, payload: users};
}

export type FetchAllUsersAction = GeneralThunkAction<Promise<IUser[]>>;

export function fetchAllUsers(): FetchAllUsersAction {
    return (dispatch) => {
        return getAllUsers()
            .then((users: IUser[]) => {
                dispatch(saveUsers(users));
                return users;
            });
    };
}
