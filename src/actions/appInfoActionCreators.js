import {SAVE_APP_INFO} from 'constants/appInfoConstants';

export function initializeAppInfo() {
  return (dispatch, getState) => {
    dispatch({type: SAVE_APP_INFO, payload: {name: 'React ...updating', version: '0.0.1'}});
  };
}

export function updateAppInfo() {
  return (dispatch, getState) => {
    dispatch({type: SAVE_APP_INFO, payload: {name: 'React boilerplate', version: '1.0.0'}});
  };
}
