import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule
  ]
})
export class FavoritesModule { }
