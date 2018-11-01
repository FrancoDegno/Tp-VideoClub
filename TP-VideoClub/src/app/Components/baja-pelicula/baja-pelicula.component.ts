import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';
import { MovieServiceService } from 'src/app/Services/movie-service.service';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-baja-pelicula',
  templateUrl: './baja-pelicula.component.html',
  styleUrls: ['./baja-pelicula.component.css']
})
export class BajaPeliculaComponent implements OnInit {
  constructor(private _service:MovieServiceService
    ,private _route:Router
    ,private _serviceU:UserServiceService) {
   
   }

   ngOnInit() {
   // this.listarPeliculas();
  }

  verId(id:number)
{
  console.log(id);
}
 
  bajaPelicula(id:number)
  {
      this._service.removePelicula(id)
      .subscribe(
       response=>{
         this._service.peliculas2=this._service.peliculas2.filter(fil=>fil.id!=id);
        }
      )
  }

  logOut()
  {
    this._serviceU.logOut();
  }

}
