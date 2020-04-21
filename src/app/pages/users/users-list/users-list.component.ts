import {Component, OnInit, ViewChild} from '@angular/core';
import Swal from 'sweetalert2';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {UserService} from '../../../services/user.service';

const ELEMENT_DATA: any = [
  {surname: 'Hernandez', name: 'Pablo', category: 1, role: 3},
  {surname: 'Hernandez', name: 'Pablo', category: 1, role: 3},
  {surname: 'Hernandez', name: 'Pablo', category: 1, role: 3},
];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  displayedColumns: string[] = ['lastName', 'name', 'category', 'role', 'actions'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateUser(id) {
    console.log('Actualizar funciona');
    console.log(id);
  }

  deleteUser() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Usuario borrado',
          text: 'El usuario X se ha borrado correctamente',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
        });
      }
    });
  }

}
