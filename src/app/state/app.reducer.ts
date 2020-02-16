import * as fromUser from './store/user/reducers';
import { USER_STORE } from '../utils/storeNames';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
    [USER_STORE]: fromUser.State
}

export const reducers : ActionReducerMap<AppState> = {
    [USER_STORE]: fromUser.UserReducer
}