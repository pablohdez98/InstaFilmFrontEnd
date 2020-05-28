import {Component, Input, OnInit} from '@angular/core';
import {SeriesService} from '../../services/series/series.service';
import {FilmService} from '../../services/film/film.service';
import {Review} from '../../services/comment/review';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() reviews: Review[];
  @Input() type: string;
  @Input() id: string;
  public reviewForm: FormGroup;

  constructor(private seriesService: SeriesService,
              private filmService: FilmService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if(this.type === 'film') {
      this.reviewForm = this.formBuilder.group({
        content: ['', Validators.required],
        filmId: this.id
      });
    } else {
      this.reviewForm = this.formBuilder.group({
        content: ['', Validators.required],
        seriesId: this.id
      });
    }
  }
  async onSubmit(form) {
    if (this.reviewForm.status === 'VALID') {
      const service = this.type === 'film' ? this.filmService : this.seriesService;
      service.createComment(form).subscribe(
        (review) => {
          this.reviews.unshift(review);
          this.reviewForm.reset();
        },
        async error => {
          await Swal.fire({
            title: 'Error',
            text: error.error.message,
            icon: 'error',
            confirmButtonText: 'OK',
          })
        }
      );
    }
  }

}
