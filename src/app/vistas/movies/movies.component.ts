import { Component, OnInit } from '@angular/core'; //Input OnInit
import { ApiService } from '../../services/api/api.service';
import { MoviesInterface } from 'src/app/models/movies.interface';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  // movies!: any;
  movies: MoviesInterface.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  //  movies: any[] = []

  constructor(private api: ApiService, private router: Router) {

  }

  ngOnInit(): void {
    this.api.getMovies().subscribe((data) => { //data: MoviesI[]
      this.movies = data//Object.entries(data)[1][1]
      console.log(this.movies);
    })
  }
  seeInfo(id:number){
    this.router.navigate([`movies/detail/${id}`])
  }
}
