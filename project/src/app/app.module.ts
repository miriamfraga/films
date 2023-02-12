import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavComponent } from './core/nav/nav.component';
import { FilmsComponent } from './components/films/films.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import{HttpClientModule} from '@angular/common/http';
import { FilmComponent } from './components/film/film.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    FilmsComponent,
    GestionComponent,
    NotFoundComponent,
    FilmComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
