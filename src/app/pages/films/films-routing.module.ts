import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films.component';
import {FilmDetailsComponent} from "./film-details/film-details.component";

const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: ':id', component: FilmDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
