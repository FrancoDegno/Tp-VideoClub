import { Injectable } from '@angular/core';
import { Pelicula } from 'src/app/Clases/pelicula';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  
    url:string='http://localhost:3000/peliculas';  
    peliculas:Observable<Pelicula[]>
    peliculas2:Pelicula[];
    
    selectPelicula:Pelicula;
    
  constructor(private _http:HttpClient) {
    this.peliculas2=[]
   }

  addPelicula(movie:Pelicula):Observable<Pelicula>
  {
    return this._http.post<Pelicula>(this.url,movie);
  }

  removePelicula(id:number):Observable<Pelicula>
  {
    return this._http.delete<null>(this.url+"/"+id);
  }


  updatePelicula(pelicula:Pelicula)
  {
    return this._http.put(this.url+"/"+pelicula.id,pelicula);
  }

  listUsuarios():Observable<Pelicula[]>
  {
    this.peliculas= this._http.get<Pelicula[]>(this.url);
    this.peliculas.subscribe(response=>{
      this.peliculas2=response;
    })
    return this.peliculas;
  }

}
