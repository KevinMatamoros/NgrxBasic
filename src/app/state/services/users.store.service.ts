import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/user/reducers';
import * as userAction from '../store/user/actions';
import * as userSelector from '../store/user/selectors';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private store: Store<State>) { }


  get_list() {
    return this.store.dispatch(userAction.getUsers({}));
  }

  selector_get_list() {
    return this.store.select(userSelector.getUsers)
  }

}
