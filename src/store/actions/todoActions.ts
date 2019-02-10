import {fetchAllTodos} from 'api/todoApi';
import {ITodo} from 'domain/ITodo';
import {AnyAction} from 'redux';
import {GeneralThunkAction} from 'utils/store/createActionTypes';

export const SAVE_TODOS = 'SAVE_TODOS';

function saveTodos(todos: ITodo[]): AnyAction {
    return {type: SAVE_TODOS, payload: todos};
}

export type LoadAllTodosAction = GeneralThunkAction<Promise<ITodo[]>>;

export function loadAllTodos(): LoadAllTodosAction {
    return (dispatch) => {
        return fetchAllTodos()
            .then((todos) => {
                dispatch(saveTodos(todos));
                return todos;
            });
    };
}
