import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
@NgModule({
  declarations: [SeriesComponent, CreateSeriesComponent, DeleteSeriesComponent, UpdateSeriesComponent, ListSeriesComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
  ]
})
export class SeriesModule { }
