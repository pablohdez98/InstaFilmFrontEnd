import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SeriesService} from '../../../services/series/series.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Series} from '../../../services/series/series';

@Component({
  selector: 'app-update-series',
  templateUrl: './update-series.component.html',
  styleUrls: ['./update-series.component.scss']
})
export class UpdateSeriesComponent implements OnInit {

  public updateForm: FormGroup;
  private seriesId: string;
  private series: Series;

  constructor(private formBuilder: FormBuilder,
              private seriesService: SeriesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

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
      genre: ['', Validators.required],
      releaseYear: ['', Validators.required],
      image: '',
    });
    this.route.params.subscribe(params => {
      this.seriesId = params.id;
      this.seriesService.getSeries(this.seriesId).subscribe(series => {
        this.series = series;
        this.updateForm.setValue({
          title: this.series.title,
          synopsis: this.series.synopsis,
          seasons: this.series.seasons,
          episodes: this.series.episodes,
          trailer: this.series.trailer,
          director: this.series.director,
          cast: this.series.cast,
          genre: this.series.genre,
          releaseYear: this.series.releaseYear,
          image: '',
        });
      });
    });
  }
  get FormControl() {
    return this.updateForm.controls;
  }
  async onSubmit(form) {
    if (this.updateForm.status === 'VALID') {
      this.seriesService.updateSeries(form, this.seriesId);
      await this.router.navigate(['series/list']);
    } else {
      this.updateForm.markAllAsTouched();
    }
  }
}
