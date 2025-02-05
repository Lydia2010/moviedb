import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Movies} from './Movies';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  baseUrl = 'https://api.themoviedb.org/3/';
  apikey = '?api_key=9406ed0141baddd3f8169037803f4f2f';

  constructor(public http: HttpClient) { }

  // to get result by query
  movieSearch(query: string): Observable<any> {
    const url = this.baseUrl + 'search/movie' + this.apikey + '&query=' + query;
    return this.http.get(url).pipe(
      map(res => {
        return (res as any).results.map(item => new Movies(item));
      })
    );
  }

  // to get result by id
  fetchMovieById(mid: string): Observable<any> {
    const url = this.baseUrl + 'movie/' + mid + this.apikey;
    return this.http.get<Movies>(url);
  }
}

