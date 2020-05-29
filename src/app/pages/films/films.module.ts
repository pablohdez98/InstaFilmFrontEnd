import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import {SharedModule} from "../../shared/shared.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [FilmsComponent],
    imports: [
        CommonModule,
        FilmsRoutingModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class FilmsModule { }
