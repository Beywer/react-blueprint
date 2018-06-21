import {combineReducers} from 'redux-immutable';
import {APP_STATE_PATH, DATA_PATH} from 'constants/storePathConstants';
import appStateReducer from 'reducers/appStateReducer';
import dataReducer from 'reducers/dataReducer';

export default combineReducers({
  [APP_STATE_PATH]: appStateReducer,
  [DATA_PATH]: dataReducer,
});
