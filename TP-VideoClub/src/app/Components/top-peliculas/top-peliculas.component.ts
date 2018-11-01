import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/Services/movie-service.service';
import { Pelicula } from 'src/app/Clases/pelicula';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-peliculas',
  templateUrl: './top-peliculas.component.html',
  styleUrls: ['./top-peliculas.component.css']
})
export class TopPeliculasComponent implements OnInit {

  order:Pelicula[];
  constructor(private _service:MovieServiceService,
    private _activated:ActivatedRoute) { 
      this.orderMovie();
    }

  ngOnInit() {

    this._activated.url.subscribe(response=>
      {
         this.orderMovie();
         console.log(this.order)
      })

  }

  orderMovie()
  {
   
      this.order=this._service.peliculas2;
      let order2=this.order.filter(fil=>fil.cantRaiting===0);
      this.order=this.order.filter(fil=>fil.cantRaiting!=0);
      this.order.sort((peli,peli2)=>
        (peli2.valoracion/peli2.cantRaiting)-(peli.valoracion/peli.cantRaiting)
      )
      this.order=this.order.concat(order2);
  
  
    }

}
