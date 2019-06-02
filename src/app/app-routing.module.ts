import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './views/results/movies/movies.component';
import {SearchComponent} from './views/results/search/search.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'results'},
  {path: 'results', component: MoviesComponent},
  {path: 'search/:id', component: SearchComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
