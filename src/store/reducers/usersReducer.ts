import {IUser} from 'domain/IUser';
import {AnyAction} from 'redux';
import {SAVE_USERS, SaveUsersAction} from 'store/actions/usersActions';
import {insertIntoObject} from 'utils/insertIntoObject';

export interface IUsersState {
    usersById: { [key: number]: IUser };
}

const initialState: IUsersState = {
    usersById: {},
};

export function usersReducer(state: IUsersState = initialState, action: AnyAction): IUsersState {
    switch (action.type) {
        case SAVE_USERS:
            const users = (action as SaveUsersAction).payload;
            const usersById = users
                .reduce((acc, user) => insertIntoObject(acc, user.id.toString(), user), {});
            return {...state, usersById: {...state.usersById, ...usersById}};
        default:
            return state;
    }
}
