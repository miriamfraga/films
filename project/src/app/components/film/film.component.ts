import { FilmsService } from './../../services/films.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  id!: number;
  film!: any;
  
constructor(private filmsService:FilmsService, private activatedRoute:ActivatedRoute, private router:Router){}
ngOnInit(): void {
  // aquí se pide que mire la ruta que se pone en el navegador y la guarde en la variable id
  this.activatedRoute.paramMap.subscribe(params=>{
    this.id = Number(params.get("id"));
  })
  
    this.filmsService.getFilm(this.id).subscribe((data:any)=>{
    this.film = data;
  })
}
deleteFilm(){
  this.filmsService.deleteFilm(this.id).subscribe((data:any)=>{
    this.router.navigate(["/"])
  })
}
}

