import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../state/services/users.store.service';
import { Observable } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-contacts-edit-page',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.scss']
})
export class ContactsEditComponentPage implements OnInit {


  listUsers$: Observable<any>;

  constructor(private userStore:UsersService) { }

  ngOnInit() {

    this.listUsers$ = this.userStore.selector_get_list()
  }

}
