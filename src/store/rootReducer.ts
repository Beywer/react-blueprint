import { combineReducers } from 'redux';
import { ITodosState, todosReducer } from 'store/todo/todosReducer';
import { IUsersState, usersReducer } from 'store/user/usersReducer';

export interface IRootState {
    todos: ITodosState;
    users: IUsersState;
}

export const rootReducer = combineReducers({
    todos: todosReducer,
    users: usersReducer,
});
