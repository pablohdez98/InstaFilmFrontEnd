import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "./film";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000/api';
  }
  createFilm(film): Observable<Film> {
    return this.http.post<Film>(`${this.url}/movie`, film);
  }
  updateFilm(film, id): Observable<Film> {
    return this.http.put<Film>(`${this.url}/movie/${id}`, film);
  }
  deleteFilm(id): Observable<Film> {
    return this.http.delete<Film>(`${this.url}/movie/${id}`);
  }
}
