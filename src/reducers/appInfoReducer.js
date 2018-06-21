import {fromJS} from 'immutable';
import {SAVE_APP_INFO} from 'constants/appInfoConstants';

const initialState = fromJS({
  name: '',
  ver: '0.0.0',
});

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_APP_INFO:
      return state.merge(action.payload);
    default:
      return state;
  }
}
