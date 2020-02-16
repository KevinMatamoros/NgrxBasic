import { Component } from '@angular/core';
import { UsersService } from './state/services/users.store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private userStore:UsersService) { }

  getUsers(){
    this.userStore.get_list();
  }
}
