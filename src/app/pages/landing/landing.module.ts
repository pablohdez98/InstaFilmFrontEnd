import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {CarouselComponent} from "../../carousel/carousel.component";


@NgModule({
  declarations: [LandingComponent, CarouselComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SlickCarouselModule
  ]
})
export class LandingModule { }
