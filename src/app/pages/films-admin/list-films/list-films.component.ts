import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import Swal from "sweetalert2";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Film} from "../../../services/film/film";
import {FilmService} from "../../../services/film/film.service";

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.scss']
})
export class ListFilmsComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'title', 'director', 'genre', 'releaseYear', 'actions'];
  public dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private filmService: FilmService) {}


  ngOnInit() {
    this.filmService.getFilms().subscribe(data => {
      data.sort((film1: Film, film2: Film) => film1.id - film2.id);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteFilm(id) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir este cambio',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.filmService.deleteFilm(id).subscribe(
          () => {
            const data = this.dataSource._data.value;
            this.dataSource = new MatTableDataSource(data.filter((film: Film) => film.id !== id));
            Swal.fire({
              title: 'Película borrada',
              text: 'La película se ha borrado correctamente',
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
        );
      }
    });
  }

}
