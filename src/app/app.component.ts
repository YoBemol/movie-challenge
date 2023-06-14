import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-challenge';
  http = inject(HttpClient);
  movies: Movie[] = [];

  ngOnInit(){
    this.http.get<Movie[]>('https://api.escuelajs.co/api/v1/products') //posible falla por url
    .subscribe((data:any) => {
      this.movies = data;
    });
  }
}
