import { Injectable } from '@angular/core';
import { MoviesInterface } from '../../models/movies.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
//require('dotenv').config();

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://api.themoviedb.org/3/movie/popular?language=es-US&page=1';


  constructor(private http: HttpClient) {
    
   }

  getMovies(): Observable<MoviesInterface.MoviesResponse> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer ' + environment.urls.API_KEY
    })
    const ruta = this.url + 'movie/popular';
    return this.http.get<MoviesInterface.MoviesResponse>(ruta, {headers});// arreglar debe entregarme solo peliculas no todo http
  }
}
//console.log(process.env);
