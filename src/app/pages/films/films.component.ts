import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../services/film/film.service';
import {Film} from '../../services/film/film';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  public films: Film[];
  public favs: number[];
  public iconHeart = faHeart;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(data => {
      this.films = data;
    });
    this.filmService.getFavorite().subscribe( data => {
      this.favs = data.map(film => film.id);
    });
  }

  toogleFavorite(id) {
    if (this.favs.includes(id)) {
      this.filmService.deleteFavorite(id).subscribe(() => this.favs = this.favs.filter(fav => fav !== id));
    } else {
      this.filmService.addFavorite({filmId: id}).subscribe(() => {
        this.favs.push(id);
      });
    }
  }
}
