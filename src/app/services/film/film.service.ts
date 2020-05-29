import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "./film";
import {Global} from "../global";
import {Review} from "../comment/review";

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
  createComment(review): Observable<Review> {
    return this.http.post<Review>(`${this.url}/films/create-comment`, review);
  }
  deleteComment(id): Observable<Review> {
    return this.http.delete<Review>(`${this.url}/films/comment/${id}`);
  }
  getFavorite(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.url}/films-user-favorites`);
  }
  addFavorite(film): Observable<Film[]> {
    return this.http.post<Film[]>(`${this.url}/films/add-favorite`, film);
  }
  deleteFavorite(id): Observable<Film[]> {
    return this.http.delete<Film[]>(`${this.url}/films/favorite/${id}`);
  }
}
