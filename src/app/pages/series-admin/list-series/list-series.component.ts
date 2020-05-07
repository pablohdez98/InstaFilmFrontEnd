import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import {SeriesService} from '../../../services/series/series.service';
import {Series} from '../../../services/series/series';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.scss']
})
export class ListSeriesComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'title', 'director', 'genre', 'releaseYear', 'actions'];
  public dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.seriesService.getSerieses().subscribe(data => {
      data.sort((serie1: Series, serie2: Series) => serie1.id - serie2.id);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteSeries(id) {
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
        this.seriesService.deleteSeries(id).subscribe(
          () => {
            const data = this.dataSource._data.value;
            this.dataSource = new MatTableDataSource(data.filter((series: Series) => series.id !== id));
            Swal.fire({
              title: 'Serie borrada',
              text: 'La serie se ha borrado correctamente',
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
