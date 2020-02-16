import { createAction, props } from '@ngrx/store';

export const get_users = '[USER] Get users';
export const set_users = '[USER] Set users';

export const getUsers = createAction(get_users, props<{}>());
export const setUsers = createAction(set_users, props<{ data: any }>());
