import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Film} from "../../../services/film/film";
import {FilmService} from "../../../services/film/film.service";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  public film: Film;

  constructor(private filmService: FilmService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.filmService.getFilm(params.id).subscribe(film => {
        this.film = film;
      });
    });
  }

}
