import {getAllTodos} from 'api/todoApi';
import {ITodo} from 'domain/ITodo';
import {GeneralThunkAction, PayloadedAction} from 'utils/store/actionTypes';

export const SAVE_TODOS = 'SAVE_TODOS';

export type SaveTodosAction = PayloadedAction<ITodo[]>;

export function saveTodos(todos: ITodo[]): SaveTodosAction {
    return {type: SAVE_TODOS, payload: todos};
}

export type FetchAllTodosAction = GeneralThunkAction<Promise<ITodo[]>>;

export function fetchAllTodos(): FetchAllTodosAction {
    return (dispatch) => {
        return getAllTodos()
            .then((todos) => {
                dispatch(saveTodos(todos));
                return todos;
            });
    };
}
