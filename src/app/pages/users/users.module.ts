import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from 'angular-datatables';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [UsersComponent, UsersListComponent, DeleteUserComponent, UpdateUserComponent, CreateUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    FontAwesomeModule
  ]
})
export class UsersModule { }
