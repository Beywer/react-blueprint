import {combineReducers} from 'redux';
import {ITodosState, todosReducer} from 'store/reducers/todosReducer';
import {IUsersState, usersReducer} from 'store/reducers/usersReducer';

export interface IRootState {
    todos: ITodosState;
    users: IUsersState;
}

export const rootReducer = combineReducers({
    todos: todosReducer,
    users: usersReducer,
});
