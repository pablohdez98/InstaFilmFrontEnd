import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsAdminRoutingModule } from './films-admin-routing.module';
import { FilmsAdminComponent } from './films-admin.component';
import {CreateFilmsComponent} from "./create-films/create-films.component";
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateFilmsComponent } from './update-films/update-films.component';
import { ListFilmsComponent } from './list-films/list-films.component';


@NgModule({
  declarations: [FilmsAdminComponent, CreateFilmsComponent, UpdateFilmsComponent, ListFilmsComponent],
  imports: [
    CommonModule,
    FilmsAdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class FilmsAdminModule { }
