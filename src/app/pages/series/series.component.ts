import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../../services/series/series.service';
import {Series} from '../../services/series/series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  public series: Series[];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSerieses().subscribe(data => {
      this.series = data;
    });
  }

}
