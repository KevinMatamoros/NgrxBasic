import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as sharedComponents from './shared-components';
import { UsersComponent } from './routable-components/users/users.component';
import { HomeComponent } from './routable-components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './state/app.reducer';
import { UserEffects } from './state/store/user/effects';
import { ContactsEditComponent } from './shared-components/contacts-edit/component/contacts-edit.component';
import { UserReducer, reducer } from './state/store/user/reducers';

@NgModule({
  declarations: [
    AppComponent,
    sharedComponents.ContactsComponentPage,
    sharedComponents.ContactsComponent,
    sharedComponents.ContactsEditComponentPage,
    sharedComponents.ContactsEditComponent,
    sharedComponents.ConfigComponent,
    UsersComponent,
    HomeComponent,
    ContactsEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({User:reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot([UserEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
