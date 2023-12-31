import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './vistas/movies/movies.component';
import { MovieDetailComponent } from './vistas/movies/movie-detail/movie-detail.component';

const routes: Routes = [
   
  // { path:'movies',
  //  component: MoviesComponent,
  //  children: [
  //  { 
  //   path:'detail/:id', 
  //   component: MovieDetailComponent 
  // }
  // ]
  // },
  { path:'movies',  component: MoviesComponent},
  { path:'detail/:id', component: MovieDetailComponent },
  { path: '', redirectTo: 'movies', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//para exportar mas variables y llamarlos solo con routingComponents
export const routingComponents = [
  MoviesComponent
]
