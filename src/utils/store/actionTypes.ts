import { Action, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

interface AnyObject {
    [key: string]: any;
}

export type GeneralThunkAction<R, Store = AnyObject> = ThunkAction<R, Store, undefined, Action>;
export type GeneralThunkDispatch = ThunkDispatch<AnyObject, undefined, Action>;

export type PayloadedAction<P> = AnyAction & { payload: P };
