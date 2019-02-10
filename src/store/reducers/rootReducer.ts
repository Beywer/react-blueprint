import {ITodo} from 'domain/ITodo';
import {IUser} from 'domain/IUser';
import {AnyAction} from 'redux';
import {SAVE_TODOS} from 'store/actions/todoActions';
import {SAVE_USERS} from 'store/actions/userActions';

export interface IRootState {
    todos: ITodo[];
    users: IUser[];
}

const initialState: IRootState = {
    todos: [],
    users: [],
};

export function rootReducer(state: IRootState = initialState, action: AnyAction): IRootState {
    switch (action.type) {
        case SAVE_TODOS:
            return {...state, todos: action.payload};
        case SAVE_USERS:
            return {...state, users: action.payload};
        default:
            return state;
    }
}
