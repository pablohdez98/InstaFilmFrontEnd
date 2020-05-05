import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  async onSubmit(form) {
    if (this.loginForm.status === 'VALID') {
      this.userService.login(form).subscribe(
        async (user) => {
          localStorage.setItem('user', JSON.stringify(user));
          await this.router.navigate(['/']);
        },
        error => console.log(error)
      );
    } else {
      await Swal.fire({
        title: 'Error',
        text: 'El usuario o la contraseña son incorrectos',
        icon: 'error',
        confirmButtonText: 'OK',
      })
    }
  }

}
