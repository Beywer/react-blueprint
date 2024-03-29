import { Todo } from 'domain/Todo';
import * as reselect from 'reselect';
import { store } from 'store/configureStore';
import { IRootState } from 'store/rootReducer';
import { fetchAllTodos } from 'store/todo/todosActions';
import { usersByIdSelector } from 'store/user/usersSelectors';
import { GeneralThunkDispatch } from 'utils/store/actionTypes';
import { User } from '../../domain/User';

let isAllTodosLoading = false;

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
        const todo = { ...todosById[id] } as Todo;
        todo.user = usersById[todo.userId] as User;
        return todo;
    });
}

export const allTodosSelector = reselect.createSelector(
    [storeTodosSelector],
    (allTodos: Todo[]) => allTodos,
);
