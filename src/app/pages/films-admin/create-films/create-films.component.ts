import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FilmService} from "../../../services/film/film.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-create-series',
  templateUrl: './create-films.component.html',
  styleUrls: ['./create-films.component.scss']
})
export class CreateFilmsComponent implements OnInit {

  public createForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private filmService: FilmService,
              private router: Router) {
  }

  ngOnInit() {
    const reg = '(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*(\\?.*)?';
    this.createForm = this.formBuilder.group({
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
  }
  get FormControl() {
    return this.createForm.controls;
  }
  async onSubmit(form) {
    if (this.createForm.status === 'VALID') {
      this.filmService.createFilm(form).subscribe(
        () => this.router.navigate(['/admin/films']),
        async error => {
          await Swal.fire({
            title: 'Error',
            text: error.error.message,
            icon: 'error',
            confirmButtonText: 'OK',
          })
      });
      //
    } else {
      this.createForm.markAllAsTouched();
    }
  }
}
