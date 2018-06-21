import {connect} from 'react-redux';
import App from 'components/App/App';
import {appInfoPath} from 'constants/appInfoConstants';
import {initializeAppInfo, updateAppInfo} from 'actions/appInfoActionCreators';

const mapStateToProps = state => ({
  name: state.getIn([...appInfoPath, 'name'], ''),
  version: state.getIn([...appInfoPath, 'version'], ''),
});
const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(initializeAppInfo()),
  update: () => dispatch(updateAppInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
