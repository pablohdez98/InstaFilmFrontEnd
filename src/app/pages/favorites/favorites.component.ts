import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SeriesService} from '../../services/series/series.service';
import {Series} from '../../services/series/series';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import {FilmService} from '../../services/film/film.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public displayedColumns: string[] = ['title', 'director', 'genre', 'releaseYear', 'actions'];
  public dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private seriesService: SeriesService,
              private filmService: FilmService) {}

  ngOnInit() {
    this.seriesService.getFavorite().subscribe(data => {
      this.filmService.getFavorite().subscribe(data2 => {
        // @ts-ignore
        const dataTable = data.concat(data2);
        this.dataSource = new MatTableDataSource(dataTable);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteFavorite(element) {
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
        if (element.seasons) {
          this.seriesService.deleteFavorite(element.id).subscribe(
            () => this.createSuccessSwal(element.id, 'serie'),
            error => this.createErrorSwal(error)
          );
        } else {
          this.filmService.deleteFavorite(element.id).subscribe(
            () => this.createSuccessSwal(element.id, 'película'),
            error => this.createErrorSwal(error)
          );
        }
      }
    });
  }

  createSuccessSwal(id, type) {
    const data = this.dataSource._data.value;
    this.dataSource = new MatTableDataSource(data.filter((series: Series) => series.id !== id));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    Swal.fire({
      title: 'Borrado exitoso',
      text: `La ${type} se ha eliminado de tu lista de favoritos`,
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
    });
  }

  async createErrorSwal(error) {
    await Swal.fire({
      title: 'Error',
      text: error.error.message,
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
}
