import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesComponent } from './series.component';
import {CreateSeriesComponent} from './create-series/create-series.component';
import {UpdateSeriesComponent} from './update-series/update-series.component';
import {ListSeriesComponent} from './list-series/list-series.component';

const routes: Routes = [
  {
    path: '', component: SeriesComponent,
    children: [
      { path: 'list', component: ListSeriesComponent },
      { path: 'new', component: CreateSeriesComponent },
      { path: 'update/:id', component: UpdateSeriesComponent },
      { path: '', redirectTo: 'list'}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
