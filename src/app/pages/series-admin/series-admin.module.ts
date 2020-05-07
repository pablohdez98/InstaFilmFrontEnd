import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesAdminRoutingModule } from './series-admin-routing.module';
import { SeriesAdminComponent } from './series-admin.component';
import { CreateSeriesComponent } from './create-series/create-series.component';
import { UpdateSeriesComponent } from './update-series/update-series.component';
import { ListSeriesComponent } from './list-series/list-series.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [SeriesAdminComponent, CreateSeriesComponent, UpdateSeriesComponent, ListSeriesComponent],
  imports: [
    CommonModule,
    SeriesAdminRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class SeriesAdminModule { }
