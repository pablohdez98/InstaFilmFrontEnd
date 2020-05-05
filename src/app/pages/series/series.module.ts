import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
import { CreateSeriesComponent } from './create-series/create-series.component';
import { DeleteSeriesComponent } from './delete-series/delete-series.component';
import { UpdateSeriesComponent } from './update-series/update-series.component';
import { ListSeriesComponent } from './list-series/list-series.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SeriesComponent, CreateSeriesComponent, DeleteSeriesComponent, UpdateSeriesComponent, ListSeriesComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class SeriesModule { }
