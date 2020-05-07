import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user';
import {JwtHelperService} from "@auth0/angular-jwt";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string;
  private currentUser:BehaviorSubject<any>;

  constructor(private http: HttpClient,
              private jwtHelperService: JwtHelperService) {
    this.url = 'http://localhost:5000/api';
    this.currentUser = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
  }
  login(form): Observable<any> {
    return this.http.post(this.url + '/login', form).pipe(
      tap(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.next(JSON.stringify(user))
      })
    );
  }
  signup(form): Observable<any> {
    return this.http.post(this.url + '/register', form);
  }

  getUsers(): Observable<User[]> {
   return this.http.get<User[]>(`${this.url}/users`);
  }
  getUser(idUser): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${idUser}`);
  }
  createUser(user): Observable<User> {
    return this.http.post<User>(`${this.url}/user`, user);
  }
  updateUser(user, id): Observable<User> {
    return this.http.put<User>(`${this.url}/user/${id}`, user);
  }
  deleteUser(id): Observable<any> {
    return this.http.delete(`${this.url}/user/${id}`);
  }
}
