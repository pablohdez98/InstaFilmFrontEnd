import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsAdminRoutingModule } from './films-admin-routing.module';
import { FilmsAdminComponent } from './films-admin.component';
import {CreateFilmsAdminComponent} from "./create-films-admin/create-films-admin.component";
import { UpdateFilmsComponent } from './update-films/update-films.component';
import { ListFilmsComponent } from './list-films/list-films.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FilmsAdminComponent, CreateFilmsAdminComponent, UpdateFilmsComponent, ListFilmsComponent],
  imports: [
    CommonModule,
    FilmsAdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class FilmsAdminModule { }
