import * as userActions from './actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface State {
    users: {
        list: any
    }
};

export const InitialState: State = {
    users: {
        list:[]
    }
};

export const UserReducer = createReducer(
    InitialState,
    on(userActions.setUsers, (state: State, action) => {
        const newState = { ...state };
        newState.users.list = action.data;
        return newState;
    })
);

export function reducer(state: State | undefined, action: Action) {
    return UserReducer(state, action);
  }