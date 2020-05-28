import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Series} from './series';
import {Observable} from 'rxjs';
import {Review} from "../comment/review";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000/api';
  }
  getSerieses(): Observable<Series[]> {
    return this.http.get<Series[]>(`${this.url}/serieses`);
  }
  getSeries(id): Observable<Series> {
    return this.http.get<Series>(`${this.url}/series/${id}`);
  }
  createSeries(series): Observable<Series> {
    return this.http.post<Series>(`${this.url}/series`, series);
  }
  updateSeries(series, id): Observable<Series> {
    return this.http.put<Series>(`${this.url}/series/${id}`, series);
  }
  deleteSeries(id): Observable<Series> {
    return this.http.delete<Series>(`${this.url}/series/${id}`);
  }
  getPopular(): Observable<Series[]> {
    return this.http.get<Series[]>(`${this.url}/landing/series/popular`);
  }
  getLatest(): Observable<Series[]> {
    return this.http.get<Series[]>(`${this.url}/landing/series/latest`);
  }
  createComment(review): Observable<Review> {
    return this.http.post<Review>(`${this.url}/series/create-comment`, review);
  }
  deleteComment(id): Observable<Review> {
    return this.http.delete<Review>(`${this.url}/series/comment/${id}`);
  }
}
