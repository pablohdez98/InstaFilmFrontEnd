import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SeriesComponent} from "../series/series.component";
import {CreateFilmsAdminComponent} from "./create-films-admin/create-films-admin.component";

const routes: Routes = [
  {
    path: '', component: SeriesComponent,
    children: [
      { path: 'new', component: CreateFilmsAdminComponent },
      { path: '', redirectTo: 'list'}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsAdminRoutingModule { }
