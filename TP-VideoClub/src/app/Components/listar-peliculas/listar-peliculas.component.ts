import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/Services/movie-service.service';
import { Pelicula } from 'src/app/Clases/pelicula';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit {


  constructor(private _service: MovieServiceService,
    private _serviceU:UserServiceService,
    private _route:Router) {

   }



  ngOnInit() {
    this.listarPeliculas();
  }

  listarPeliculas() {
    this._service.listUsuarios().subscribe
      (response => {
        console.log(this._service.peliculas2);
      })

  }

  logOut()
  {
    this._serviceU.logOut();
  }

  detalles(pelicula:Pelicula)
  {
    this._service.selectPelicula=pelicula;

    this._route.navigate(["detailMovie"]);
  }
  
  
}
