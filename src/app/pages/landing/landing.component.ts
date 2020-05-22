import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film/film.service';
import {SeriesService} from '../../services/series/series.service';
import {Series} from '../../services/series/series';
import {Film} from '../../services/film/film';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  seriesLatest: Series[];
  seriesPopular: Series[];
  filmsLatest: Film[];
  filmsPopular: Film[];
  constructor(private filmService: FilmService,
              private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.filmService.getLatest().subscribe(films => {
      this.filmsLatest = films;
    });
    this.filmService.getPopular().subscribe(films => {
      this.filmsPopular = films;
    });
    this.seriesService.getLatest().subscribe(series => {
      this.seriesLatest = series;
    });
    this.seriesService.getPopular().subscribe(series => {
      this.seriesPopular = series;
    });
  }
}
