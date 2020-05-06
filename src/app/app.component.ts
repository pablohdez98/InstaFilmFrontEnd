import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InstaFilm';

  constructor(private router: Router) {}

  async logout() {
    localStorage.clear();
    await this.router.navigate(['login']);
  }
}
