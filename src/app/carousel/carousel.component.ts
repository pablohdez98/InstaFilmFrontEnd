import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() elements: any[];
  @Input() type: string;
  slides: any[];
  slideConfig: any;

  constructor() { }

  ngOnInit(): void {
    this.slideConfig = {
      infinite: false,
      slidesToShow: 8,
      slidesToScroll: 8,
      arrows: true,
      dots: true,
    };
  }
}
