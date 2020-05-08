import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SeriesService} from '../../../services/series/series.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Series} from '../../../services/series/series';

@Component({
  selector: 'app-update-series',
  templateUrl: './update-series.component.html',
  styleUrls: ['./update-series.component.scss']
})
export class UpdateSeriesComponent implements OnInit {
  public updateForm: FormGroup;
  public series: Series;
  constructor(private formBuilder: FormBuilder,
              private seriesService: SeriesService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    const reg = '(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*(\\?.*)?';
    this.updateForm = this.formBuilder.group({
      title: ['', Validators.required],
      synopsis: ['', Validators.required],
      seasons: ['', Validators.required],
      episodes: ['', Validators.required],
      trailer: ['', [Validators.required, Validators.pattern(reg)]],
      director: ['', Validators.required],
      cast: ['', Validators.required],
      genre: ['drama', Validators.required],
      releaseYear: ['', Validators.required],
      image_path: '',
    });
    this.route.params.subscribe(params => {
      this.seriesService.getSeries(params.id).subscribe(series => {
        this.series = series;
        this.updateForm.setValue({
          title: series.title,
          synopsis: series.synopsis,
          seasons: series.seasons,
          episodes: series.episodes,
          trailer: series.trailer,
          director: series.director,
          cast: series.cast,
          genre: series.genre,
          releaseYear: series.releaseYear,
          image_path: series.image_path,
        });
      });
    });
  }
  get FormControl() {
    return this.updateForm.controls;
  }
  async onSubmit(form) {
    if (this.updateForm.status === 'VALID') {
      this.seriesService.updateSeries(form, this.series.id).subscribe(
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
      this.updateForm.markAllAsTouched();
    }
  }
}
