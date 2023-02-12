import { FilmComponent } from './components/film/film.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "films", component: FilmsComponent},
  {path: "gestion", component: GestionComponent},
    {path: '**', component: NotFoundComponent},
  // { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },


  {path: 'films/:id', component: FilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
