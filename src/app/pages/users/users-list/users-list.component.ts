import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  datatableOption: DataTables.Settings = {
    language: {
      url: '//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json'
    }
  };

  constructor() { }

  ngOnInit() {
  }

  updateUser() {
    console.log('Actualizar funciona');
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
