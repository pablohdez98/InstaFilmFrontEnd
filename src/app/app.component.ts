import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './services/user/user.service';
import {User} from './services/user/user';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InstaFilm';
  currentUser: User;
  role: number;

  constructor(private router: Router,
              private userService: UserService,
              private jwtHelperService: JwtHelperService) {}

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.role = this.jwtHelperService.decodeToken(user.access_token).role;
      }
    });
  }
  logout() {
    this.userService.logout();
  }
}
