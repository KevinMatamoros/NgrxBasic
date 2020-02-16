import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../state/services/users.store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts.page.component.html',
  styleUrls: ['./contacts.page.component.scss']
})
export class ContactsComponentPage implements OnInit {

  listUsers$: Observable<any>;

  constructor(private userStore:UsersService) { }

  ngOnInit() {
    this.listUsers$ = this.userStore.selector_get_list()
  }

}
