import { User } from 'domain/User';
import { store } from 'store/configureStore';
import { IRootState } from 'store/rootReducer';
import { fetchAllUsers } from 'store/user/usersActions';
import { GeneralThunkDispatch } from 'utils/store/actionTypes';

let isAllUsersLoaded = false;

export const usersByIdSelector = ({
    users: { usersById },
}: IRootState): { [key: string]: User } => {
    if (Object.keys(usersById).length === 0 && !isAllUsersLoaded) {
        isAllUsersLoaded = true;
        (store.dispatch as GeneralThunkDispatch)(fetchAllUsers()).then(
            () => (isAllUsersLoaded = false),
        );
    }

    return usersById;
};
