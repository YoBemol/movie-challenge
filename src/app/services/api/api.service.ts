import { Injectable } from '@angular/core';
import { MoviesI } from '../../models/movies.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MoviesI[]> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzlhN2Q1OWY3NWIyYzUwNzNjNTQwNWZlM2Y3OTIzYyIsInN1YiI6IjY0ODkwMjgwYmYzMWYyNTA1ODgzNjgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dmXFlqbn5p-Vrgh5HXhBl3-b1PunPv3dfSP74RWHadg'
    })
    const ruta = this.url + 'movie/popular';
    return this.http.get<MoviesI[]>(ruta, {headers});
  }
}
