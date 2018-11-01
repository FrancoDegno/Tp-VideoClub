import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/Services/movie-service.service';
import { Pelicula } from 'src/app/Clases/pelicula';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';
@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {


  pelicula:Pelicula={id:null,titulo:"",descripcion:"",imagen:"",genero:"",alquilada:false,
  valoracion:0,cantidadAlquileres:0,cantRaiting:0};

  constructor(private _service:MovieServiceService
    ,private route:Router
    ,private _serviceU:UserServiceService) { 
    console.log(this._service.peliculas2.length);
  }

  ngOnInit() {
    
  }

  altaPelicula()
  {
    console.log(this.pelicula);


    //this.pelicula.id=this._service.peliculas2.length+1;

    console.log(this.pelicula);
    this._service.addPelicula(this.pelicula).subscribe
    (peli=>{
      this._service.peliculas2=this._service.peliculas2.concat(peli);
      this.route.navigate(["/ListaPeliculas"]);
    })
  }
  logOut()
  {
    this._serviceU.logOut();
  }


}
