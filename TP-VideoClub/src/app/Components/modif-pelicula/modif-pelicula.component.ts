import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/Services/movie-service.service';
import { Pelicula } from 'src/app/Clases/pelicula';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-modif-pelicula',
  templateUrl: './modif-pelicula.component.html',
  styleUrls: ['./modif-pelicula.component.css']
})
export class ModifPeliculaComponent implements OnInit {

  pelicula:Pelicula;
  constructor(private _service:MovieServiceService
    ,private _route:Router
    ,private _serviceU:UserServiceService) { }

  ngOnInit() {
   // this.listarPeliculas();
  }


  selectToModif(pelicula:Pelicula)
  {
    this.pelicula=pelicula;
  }

  modifPelicula()
  {
    this._service.updatePelicula(this.pelicula).subscribe
    (response=>{
      //se actualiza automaticamente en la lista ya que al trabajar por referencia el primer get
      //en listar peliculas me da referencia automaticamente al json, por lo que las modificaciones
      //que no sean eliminar o agregar se guardan automaticamente.
        this.pelicula=null;
        this._route.navigate(["/modifMovie"]);
    })
  }

  logOut()
  {
    this._serviceU.logOut();
  }

}
