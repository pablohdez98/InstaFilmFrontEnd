import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import {UsersListComponent} from './users-list/users-list.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      { path: '', component: UsersListComponent },
      { path: 'new', component: CreateUserComponent },
      { path: ':id', component: UpdateUserComponent },
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
