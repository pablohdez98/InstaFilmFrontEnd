import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user/user.service";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public createForm: FormGroup;
  public seePassword: boolean;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.seePassword = false;
  }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      category: ['', Validators.required],
      information: '',
      image: '',
    });
  }
  get FormControl() {
    return this.createForm.controls;
  }
  getSeePassword(): boolean {
    return this.seePassword;
  }
  toggleSeePassword(): void {
    this.seePassword = !this.seePassword;
  }
  async onSubmit(form) {
    if (this.createForm.status === 'VALID') {
      this.userService.createUser(form).subscribe();
      await this.router.navigate(['/admin/users']);
    } else {
      this.createForm.markAllAsTouched();
    }
  }

}
