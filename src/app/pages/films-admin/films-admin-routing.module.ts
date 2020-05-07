import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateFilmsComponent} from "./create-films/create-films.component";
import {UpdateFilmsComponent} from "./update-films/update-films.component";
import {ListFilmsComponent} from "./list-films/list-films.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'new', component: CreateFilmsComponent },
      { path: ':id', component: UpdateFilmsComponent },
      { path: '', component: ListFilmsComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsAdminRoutingModule { }
