import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import {SharedModule} from "../../shared/shared.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SeriesComponent, SeriesDetailsComponent],
    imports: [
        CommonModule,
        SeriesRoutingModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class SeriesModule { }
