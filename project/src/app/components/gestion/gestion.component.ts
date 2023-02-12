import { Router } from '@angular/router';
import { FilmsService } from './../../services/films.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  filmForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, 
   private filmsService: FilmsService,
   private router:Router){}
   public newFilm = this.filmsService.filmData;
   public filmId = this.filmsService.filmData.id;

   ngOnInit(): void{
    this.filmForm = this.formBuilder.group({
      title:
         [this.newFilm.title,[Validators.required, Validators.minLength(4)]],
      image:
         [this.newFilm.image,[Validators.required]],
      direction:
         [this.newFilm.direction,[Validators.required]],
      year: 
         [this.newFilm.year,[Validators.required]]

    });

    this.filmForm.valueChanges.subscribe(changes=>{
      this.newFilm = changes;
    })
   }

   onSubmit(){
    // console.log(this.newFilm)
    this.filmsService.postFilm(this.newFilm).subscribe((data:any)=>{
      this.router.navigate(["/films"])
    })
   }
}

