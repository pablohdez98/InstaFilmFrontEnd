import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get FormControl() {
    return this.signupForm.controls;
  }

  async onSubmit(form) {
    if (this.signupForm.status === 'VALID') {
      this.userService.signup(form).subscribe(
        async () => {
          await this.router.navigate(['/login']);
        },
        async () => {
          await Swal.fire({
            title: 'Error',
            text: 'Hubo un error a la hora de registrarte',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      );
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
