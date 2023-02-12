import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {
    backUrl:string = " http://localhost:3000/Films";
   

    constructor (private http: HttpClient) {}
    public filmData= {
      id: "",
      title: "",
      video: "",
      image: "",
      direction: "",
      year: ""
    }
    getFilms(){
    return this.http.get(this.backUrl)
  }
    getFilm(id:number){
     return this.http.get(`${this.backUrl}/${id}`)
  }
  deleteFilm(id:number){
    return this.http.delete(`${this.backUrl}/${id}`)
  }
  postFilm(film: any){
    return this.http.post(this.backUrl,film)
  }
  
}
