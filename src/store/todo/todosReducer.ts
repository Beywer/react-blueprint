import { Todo } from 'domain/Todo';
import { AnyAction } from 'redux';
import { SAVE_TODOS, SaveTodosAction } from 'store/todo/todosActions';
import { insertIntoObject } from 'utils/insertIntoObject';

export interface ITodosState {
    todosById: { [key: string]: Todo };
}

const initialState: ITodosState = {
    todosById: {},
};

export function todosReducer(state: ITodosState = initialState, action: AnyAction): ITodosState {
    switch (action.type) {
        case SAVE_TODOS: {
            const todos = (action as SaveTodosAction).payload;
            const todosById = todos.reduce(
                (acc, todo) => insertIntoObject(acc, todo.id.toString(), todo),
                {},
            );
            return { ...state, todosById: { ...state.todosById, ...todosById } };
        }
        default:
            return state;
    }
}
