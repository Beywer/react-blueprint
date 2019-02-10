import {IUser} from 'domain/IUser';
import {fetchAllUsers} from 'store/actions/usersActions';
import {store} from 'store/configureStore';
import {IRootState} from 'store/reducers/rootReducer';
import {GeneralThunkDispatch} from 'utils/store/actionTypes';

let isAllUsersLoaded: boolean = false;

export const usersByIdSelector = ({users: {usersById}}: IRootState): { [key: string]: IUser } => {
    if (Object.keys(usersById).length === 0 && !isAllUsersLoaded) {
        isAllUsersLoaded = true;
        (store.dispatch as GeneralThunkDispatch)(fetchAllUsers())
            .then(() => isAllUsersLoaded = false);
    }

    return usersById;
};
