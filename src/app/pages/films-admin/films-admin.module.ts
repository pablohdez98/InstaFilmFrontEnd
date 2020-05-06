import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsAdminRoutingModule } from './films-admin-routing.module';
import { FilmsAdminComponent } from './films-admin.component';
import {CreateFilmsAdminComponent} from "./create-films-admin/create-films-admin.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FilmsAdminComponent, CreateFilmsAdminComponent],
  imports: [
    CommonModule,
    FilmsAdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class FilmsAdminModule { }
