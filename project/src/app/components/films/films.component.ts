import { FilmsService } from './../../services/films.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
 filmList: any[] = [];
 
 constructor(private filmService:FilmsService) {}



 ngOnInit(): void{
  this.filmService.getFilms().subscribe((data:any)=>{
    console.log(data);
    this.filmList = [...data]
  })
 }

}
