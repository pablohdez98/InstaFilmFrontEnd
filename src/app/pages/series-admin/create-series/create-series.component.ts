import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SeriesService} from '../../../services/series/series.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-series',
  templateUrl: './create-series.component.html',
  styleUrls: ['./create-series.component.scss']
})
export class CreateSeriesComponent implements OnInit {

  public createForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private seriesService: SeriesService,
              private router: Router) {
  }

  ngOnInit() {
    const reg = '(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*(\\?.*)?';
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      synopsis: ['', Validators.required],
      seasons: ['', Validators.required],
      episodes: ['', Validators.required],
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
      this.seriesService.createSeries(form).subscribe(
        async () => await this.router.navigate(['admin/series']),
        async error => {
          await Swal.fire({
            title: 'Error',
            text: error.error.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      );
    } else {
      this.createForm.markAllAsTouched();
    }
  }
}
