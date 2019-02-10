import {App} from 'components/App/App';
import {connect} from 'react-redux';
import {IRootState} from 'store/reducers/rootReducer';
import {allTodosSelector} from 'store/selectros/todosSelectors';

const mapStateToProps = (state: IRootState) => ({
    todos: allTodosSelector(state),
});

export const AppContainer = connect(mapStateToProps)(App);
