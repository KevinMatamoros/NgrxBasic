import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { switchMap, map } from 'rxjs/operators';
import * as ActionsUsers from './actions';


@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UsersService
    ) {

    }

    getListUser = createEffect(
        () => this.actions$.pipe(
            ofType(ActionsUsers.getUsers),
            switchMap(() => {
                return this.userService.getListUser().pipe(
                    map((data: any) => {
                        return ActionsUsers.setUsers({data:data})
                    })
                )
            })
        )
    )
}