import { getAllTodos } from 'api/todoApi';
import { Todo } from 'domain/Todo';
import { IRootState } from 'store/reducers/rootReducer';
import { GeneralThunkAction, PayloadedAction } from 'utils/store/actionTypes';

export const SAVE_TODOS = 'SAVE_TODOS';

export type SaveTodosAction = PayloadedAction<Todo[]>;

export function saveTodos(todos: Todo[]): SaveTodosAction {
    return { type: SAVE_TODOS, payload: todos };
}

export type ToggleTodoAction = GeneralThunkAction<void>;

export function toggleTodo(todoId: string): ToggleTodoAction {
    return (dispatch, getState: () => IRootState) => {
        const todo = getState().todos.todosById[todoId];
        dispatch(saveTodos([{ ...todo, completed: !todo.completed }]));
    };
}

export type FetchAllTodosAction = GeneralThunkAction<Promise<Todo[]>>;

export function fetchAllTodos(): FetchAllTodosAction {
    return (dispatch) => {
        return getAllTodos().then((todos) => {
            dispatch(saveTodos(todos));
            return todos;
        });
    };
}
