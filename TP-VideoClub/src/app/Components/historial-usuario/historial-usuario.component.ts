import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Clases/usuario';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historial-usuario',
  templateUrl: './historial-usuario.component.html',
  styleUrls: ['./historial-usuario.component.css']
})
export class HistorialUsuarioComponent implements OnInit {

  logedUser:Usuario;

  constructor(private _serviceU:UserServiceService
    ,private _activated:ActivatedRoute) { }


  ngOnInit() {

    this._activated.url.subscribe(response=>
      {
          this.logedUser=this._serviceU.usuarios2.find(user=> user.usuario==this._serviceU.loginUser);
      })

  }

}
