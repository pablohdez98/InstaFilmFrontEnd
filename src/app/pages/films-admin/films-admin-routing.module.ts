import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SeriesComponent} from "../series/series.component";
import {ListFilmsComponent} from "./list-films/list-films.component";
import {CreateFilmsAdminComponent} from "./create-films-admin/create-films-admin.component";
import {UpdateFilmsComponent} from "./update-films/update-films.component";

const routes: Routes = [
  {
    path: '', component: SeriesComponent,
    children: [
      { path: 'list', component: ListFilmsComponent },
      { path: 'new', component: CreateFilmsAdminComponent },
      { path: 'update/:id', component: UpdateFilmsComponent },
      { path: '', redirectTo: 'list'}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsAdminRoutingModule { }
