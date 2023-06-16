import { Component, OnInit } from '@angular/core'; //Input OnInit
import { ApiService } from '../../services/api/api.service';
import { MoviesI } from 'src/app/models/movies.interface';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  // @Input() movies: MoviesI = {
  //   "adult": false,
  //   "backdrop_path": '',
  //   "genre_ids": [],
  //   "id": 0,
  //   "original_language": '',
  //   "original_title": '',
  //   "overview": '',
  //   "popularity": 0,
  //   "poster_path": '',
  //   "release_date": '',
  //   "title": '',
  //   "video": false,
  //   "vote_average": 0,
  //   "vote_count": 0
  // }
  movies: MoviesI [] = [];

  constructor(private api:ApiService, private router: Router){ //, private router: Router

  }

  ngOnInit(): void {
    this.api.getMovies().subscribe(data =>{
      console.log(data)
      this.movies = data
    })
  }
}
