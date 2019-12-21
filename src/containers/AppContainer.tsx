import { App } from 'components/App/App';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { toggleTodo } from 'store/todo/todosActions';
import { IRootState } from 'store/rootReducer';
import { allTodosSelector } from 'store/todo/todosSelectors';

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
