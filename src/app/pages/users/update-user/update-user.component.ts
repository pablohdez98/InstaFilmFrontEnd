import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user/user.service';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../services/user/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  public updateForm: FormGroup;
  public seePassword: boolean;
  private userId: string;
  public user: User;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      category: ['', Validators.required],
      information: '',
    });
    this.route.params.subscribe(params => {
      this.userId = params.id;
      this.userService.getUser(params.id).subscribe(user => {
        this.user = user;
        this.updateForm.setValue({
          name: this.user.name,
          lastName: this.user.lastName,
          email: this.user.email,
          password: this.user.password,
          role: this.user.role,
          category: this.user.category,
          information: this.user.information,
        });
      });
    });
  }
  get FormControl() {
    return this.updateForm.controls;
  }
  getSeePassword(): boolean {
    return this.seePassword;
  }
  toggleSeePassword(): void {
    this.seePassword = !this.seePassword;
  }
  async onSubmit(form) {
    if (this.updateForm.status === 'VALID') {
      this.userService.updateUser(form, this.userId).subscribe();
      await this.router.navigate(['/admin/users']);
    } else {
      this.updateForm.markAllAsTouched();
    }
  }

}
