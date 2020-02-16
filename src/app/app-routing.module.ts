import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as sharedComponent from './shared-components';
import { UsersComponent } from './routable-components/users/users.component';
import { HomeComponent } from './routable-components/home/home.component';

const routes: Routes = [
  {path:'user', component:UsersComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
