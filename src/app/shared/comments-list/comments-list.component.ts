import {Component, Input, OnInit} from '@angular/core';
import {SeriesService} from '../../services/series/series.service';
import {FilmService} from '../../services/film/film.service';
import {Review} from '../../services/comment/review';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {UserService} from "../../services/user/user.service";

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
  public user: any;
  private service: any;

  constructor(private seriesService: SeriesService,
              private filmService: FilmService,
              private formBuilder: FormBuilder,
              private userService:UserService) { }

  ngOnInit(): void {
    this.service = this.type === 'film' ? this.filmService : this.seriesService;
    this.user = this.userService.getCurrentUser();
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
      this.service.createComment(form).subscribe(
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
  deleteComment(id) {
    this.service.deleteComment(id).subscribe(
      async () => {
        this.reviews = this.reviews.filter(review => review.id !== id);
        await Swal.fire({
          title: 'Comentario eliminado',
          text: 'El comentario se ha borrado correctamente',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
        });
      },
      async error => {
        await Swal.fire({
          title: 'Error',
          text: error.error.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    )
  }

}
