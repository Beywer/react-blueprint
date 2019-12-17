import { App } from 'components/App/App';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { toggleTodo } from 'store/actions/todosActions';
import { IRootState } from 'store/reducers/rootReducer';
import { allTodosSelector } from 'store/selectros/todosSelectors';

const mapStateToProps = (state: IRootState) => ({
    todos: allTodosSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            toggleTodo,
        },
        dispatch,
    );

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
