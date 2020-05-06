import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Series} from './series';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000/api/admin';
  }

  getSerieses(): Observable<Series> {
    return this.http.get<Series>(`${this.url}/serieses`);
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
}
