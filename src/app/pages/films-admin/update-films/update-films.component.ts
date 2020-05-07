import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FilmService} from "../../../services/film/film.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {Film} from "../../../services/film/film";

@Component({
  selector: 'app-update-films',
  templateUrl: './update-films.component.html',
  styleUrls: ['./update-films.component.scss']
})
export class UpdateFilmsComponent implements OnInit {
  public updateForm: FormGroup;
  public filmId: string;
  constructor(private formBuilder: FormBuilder,
              private filmService: FilmService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const reg = '(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*(\\?.*)?';
    this.updateForm = this.formBuilder.group({
      title: ['', Validators.required],
      synopsis: ['', Validators.required],
      duration: ['', Validators.required],
      trailer: ['', [Validators.required, Validators.pattern(reg)]],
      director: ['', Validators.required],
      cast: ['', Validators.required],
      genre: ['', Validators.required],
      releaseYear: ['', Validators.required],
      image_path: '',
    });
    this.route.params.subscribe(params => {
      this.filmService.getFilm(params.id).subscribe(
        film => {
          this.filmId = params.id;
          this.updateForm.setValue({
            title: film.title,
            synopsis: film.synopsis,
            duration: film.duration,
            trailer: film.trailer,
            director: film.director,
            cast: film.cast,
            genre: film.genre,
            releaseYear: film.releaseYear,
            image_path: film.image_path,
          });
        },
        () => this.router.navigate(['admin/films']));
    });
  }
  get FormControl() {
    return this.updateForm.controls;
  }
  async onSubmit(form) {
    if (this.updateForm.status === 'VALID') {
      this.filmService.updateFilm(form, this.filmId).subscribe(
        () => this.router.navigate(['admin/films']),
        async error => {
          await Swal.fire({
            title: 'Error',
            text: error.error.message,
            icon: 'error',
            confirmButtonText: 'OK',
          })
        });
      await this.router.navigate(['series']);
    } else {
      this.updateForm.markAllAsTouched();
    }
  }
}
