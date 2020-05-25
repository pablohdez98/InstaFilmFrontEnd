import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../../../services/series/series.service';
import {ActivatedRoute} from '@angular/router';
import {Series} from '../../../services/series/series';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss']
})
export class SeriesDetailsComponent implements OnInit {
  public series: Series;

  constructor(private seriesService: SeriesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.seriesService.getSeries(params.id).subscribe(series => {
        this.series = series;
      });
    });
  }
}
