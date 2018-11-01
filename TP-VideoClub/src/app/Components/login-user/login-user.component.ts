import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { Usuario } from 'src/app/Clases/usuario';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user:Usuario=
  {
    id:null,
    nombre:"",
    apellido:"",
    usuario:"",
    contrasena:"",
    telefono:"",
    correo:"",
    estado:"",
    histPeliculas:[]
  }


  error:Boolean=false;
  constructor(private _service:UserServiceService,
    private route:Router,
    private _activated:ActivatedRoute) {
     }

  ngOnInit() {

    console.log(1/0);
    this._activated.url.subscribe(response=>
      {
          if(this._service.loginUser)
              this.route.navigate(["/ListaPeliculas"]);

      })

    this.getAll();


  }


  
  getAll()
  {
    this._service.listUsuarios().subscribe(
      response=>{
      }
    )
  }

  logIn()
  {

    let users=this._service.usuarios2.filter(response=> 
      response.usuario==this.user.usuario && response.contrasena==this.user.contrasena)


    let userLogged=users.pop();

    if(userLogged!=null)
    {
      this.error=false;
      this._service.loginUser=this.user.usuario;
      this.route.navigate(["/ListaPeliculas"]);
    }
    else{
      this.error=true;
      console.log("Error");

    }
      
  }

}
