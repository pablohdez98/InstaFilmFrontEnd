import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000/api';
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
