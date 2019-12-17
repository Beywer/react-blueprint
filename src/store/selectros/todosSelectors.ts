import { Todo } from 'domain/Todo';
import * as reselect from 'reselect';
import { fetchAllTodos } from 'store/actions/todosActions';
import { store } from 'store/configureStore';
import { IRootState } from 'store/reducers/rootReducer';
import { usersByIdSelector } from 'store/selectros/usersSelectors';
import { GeneralThunkDispatch } from 'utils/store/actionTypes';

let isAllTodosLoading: boolean = false;

function storeTodosSelector(state: IRootState): Todo[] {
    const todosById = state.todos.todosById;
    if (Object.keys(todosById).length === 0 && !isAllTodosLoading) {
        isAllTodosLoading = true;
        (store.dispatch as GeneralThunkDispatch)(fetchAllTodos()).then(
            () => (isAllTodosLoading = false),
        );
    }

    const usersById = usersByIdSelector(state);
    return Object.keys(todosById).map((id: string) => {
        const todo = { ...todosById[id] };
        todo.user = usersById[todo.userId];
        return todo;
    });
}

export const allTodosSelector = reselect.createSelector(
    [storeTodosSelector],
    (allTodos: Todo[]) => allTodos,
);
