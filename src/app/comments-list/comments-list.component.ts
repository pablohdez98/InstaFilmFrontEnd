import {Component, Input, OnInit} from '@angular/core';
import {SeriesService} from '../services/series/series.service';
import {FilmService} from '../services/film/film.service';
import {Review} from '../services/comment/review';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() reviews: Review[];

  constructor(private seriesService: SeriesService,
              private filmService: FilmService) { }

  ngOnInit(): void {}

}
