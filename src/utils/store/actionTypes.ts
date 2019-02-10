import {Action, AnyAction} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

interface IAnyObject {
    [key: string]: any;
}

export type GeneralThunkAction<R> = ThunkAction<R, IAnyObject, undefined, Action>;
export type GeneralThunkDispatch = ThunkDispatch<IAnyObject, undefined, Action>;

export type PayloadedAction<P> = AnyAction & { payload: P };
