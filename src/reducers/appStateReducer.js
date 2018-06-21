import {combineReducers} from 'redux-immutable';
import {appInfoSubPath} from 'constants/appInfoConstants';
import appInfoReducer from 'reducers/appInfoReducer';

export default combineReducers({
  [appInfoSubPath]: appInfoReducer,
});
