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
  getFilm(id): Observable<Film> {
    return this.http.get<Film>(`${this.url}/film/${id}`);
  }
  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.url}/films`);
  }
  createFilm(film): Observable<Film> {
    return this.http.post<Film>(`${this.url}/film`, film);
  }
  updateFilm(film, id): Observable<Film> {
    return this.http.put<Film>(`${this.url}/film/${id}`, film);
  }
  deleteFilm(id): Observable<Film> {
    return this.http.delete<Film>(`${this.url}/film/${id}`);
  }
}
