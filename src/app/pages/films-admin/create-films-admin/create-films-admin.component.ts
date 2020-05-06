import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {FilmService} from "../../../services/film/film.service";

@Component({
  selector: 'app-create-series',
  templateUrl: './create-films-admin.component.html',
  styleUrls: ['./create-films-admin.component.scss']
})
export class CreateFilmsAdminComponent implements OnInit {

  public createForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private filmService: FilmService,
              private router: Router) {
  }

  ngOnInit() {
    console.log(localStorage.getItem('user'))
    const reg = '(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*(\\?.*)?';
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      synopsis: ['', Validators.required],
      duration: ['', Validators.required],
      trailer: ['', [Validators.required, Validators.pattern(reg)]],
      director: ['', Validators.required],
      cast: ['', Validators.required],
      genre: ['', Validators.required],
      year: ['', Validators.required],
      image: '',
    });
  }
  get FormControl() {
    return this.createForm.controls;
  }
  async onSubmit(form) {
    if (this.createForm.status === 'VALID') {
      this.filmService.createFilm(form).subscribe(res => console.log(res));
      // await this.router.navigate(['series/list']);
    } else {
      this.createForm.markAllAsTouched();
    }
  }
}
