import {APP_STATE_PATH} from 'constants/storePathConstants';

export const appInfoSubPath = 'appInfo';
export const appInfoPath = [APP_STATE_PATH, appInfoSubPath];

// export const SAVE_APP_INFO = 'SAVE_APP_INFO';
export const SAVE_APP_INFO = Symbol('SAVE_APP_INFO');
