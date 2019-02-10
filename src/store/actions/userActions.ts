import {fetchAllUsers} from 'api/usersApi';
import {IUser} from 'domain/IUser';
import {AnyAction} from 'redux';
import {GeneralThunkAction} from 'utils/store/createActionTypes';

export const SAVE_USERS = 'SAVE_USERS';

function saveUsers(users: IUser[]): AnyAction {
    return {type: SAVE_USERS, payload: users};
}

export type LoadAllUsersAction = GeneralThunkAction<Promise<IUser[]>>;

export function loadAllUsers(): LoadAllUsersAction {
    return (dispatch) => {
        return fetchAllUsers()
            .then((users: IUser[]) => {
                dispatch(saveUsers(users));
                return users;
            });
    };
}
