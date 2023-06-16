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

  
  movies!: any;   

  constructor(private api:ApiService, private router: Router){

  }

  ngOnInit(): void {
    this.api.getMovies().subscribe((data: MoviesI[] )=>{
      this.movies = Object.entries(data)[1][1]
      console.log(this.movies);     
      
    })
  } 
  
}
