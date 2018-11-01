import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Clases/usuario';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-user',
  templateUrl: './modif-user.component.html',
  styleUrls: ['./modif-user.component.css']
})
export class ModifUserComponent implements OnInit {

  user:Usuario;
  constructor(private _service:UserServiceService,private _route:Router) { }

  ngOnInit() {
  }

  selectUser(user:Usuario)
  {
    this.user=user;
  }

  modifUser()
  {
    this._service.updateUsuario(this.user).subscribe(
      response=>{
        this.user=null;
        this._route.navigate(["/modifUser"]);

      }
    )
  }

  logOut()
  {
    this._service.logOut();
  }

}
