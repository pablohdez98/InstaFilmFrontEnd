import { Component, OnInit } from '@angular/core';
import {FilmService} from "../../services/film/film.service";
import {Film} from "../../services/film/film";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  public films: Film[];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(data => {
      this.films = data;
    });
  }

}
