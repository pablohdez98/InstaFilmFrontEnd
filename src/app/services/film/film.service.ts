import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "./film";
import {Global} from "../global";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = Global.url;
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
  getPopular(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.url}/landing/films/popular`);
  }
  getLatest(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.url}/landing/films/latest`);
  }
}
