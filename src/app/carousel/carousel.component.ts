import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: any[];
  slides: any[];
  slideConfig: any;

  constructor() { }

  ngOnInit(): void {
    this.slides = this.images;
    this.slideConfig = {
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 10,
      arrows: true,
      dots: true,
    };
  }
}
