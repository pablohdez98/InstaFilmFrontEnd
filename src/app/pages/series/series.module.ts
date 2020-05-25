import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import {SafePipe} from '../../safe.pipe';

@NgModule({
  declarations: [SeriesComponent, SeriesDetailsComponent, SafePipe],
  imports: [
    CommonModule,
    SeriesRoutingModule,
  ]
})
export class SeriesModule { }
