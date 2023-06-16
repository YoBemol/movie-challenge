import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './vistas/movies/movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch:'full'}, //pathMatch:'full' investigar si va ese parametro
  { path:'movies', component: MoviesComponent }
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
