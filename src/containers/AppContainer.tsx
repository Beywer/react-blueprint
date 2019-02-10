import {App} from 'components/App';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {loadAllTodos} from 'store/actions/todoActions';
import {loadAllUsers} from 'store/actions/userActions';
import {IRootState} from 'store/reducers/rootReducer';

const mapStateToProps = (state: IRootState) => state;

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadAllTodos,
    loadAllUsers,
}, dispatch);

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
