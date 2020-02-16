import { createSelector, } from '@ngrx/store';
import { State } from './reducers';

const select_User = (state) => state.User;

export const getUsers = createSelector(select_User, (state:State) =>{
    let response =  state.users.list;
    return response;
})