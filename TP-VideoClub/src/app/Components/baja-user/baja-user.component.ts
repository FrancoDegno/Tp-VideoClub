import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { Usuario } from 'src/app/Clases/usuario';
import { Router} from '@angular/router';

@Component({
  selector: 'app-baja-user',
  templateUrl: './baja-user.component.html',
  styleUrls: ['./baja-user.component.css']
})
export class BajaUserComponent implements OnInit {

  constructor(private _service:UserServiceService,private _route:Router) { }



  ngOnInit() {
    //this.getAll();
  }


  deleteUser(selectedUser:Usuario)
  {
    console.log("Called"+selectedUser.id)

    this._service.removeUsuario(selectedUser.id).subscribe
    (
      response=>{
        this._service.usuarios2=this._service.usuarios2.filter(fil=>fil.id!=selectedUser.id);
        alert("Deleted Successfull");
       
      }

      )
  }

  logOut()
  {
    this._service.logOut();
  }
}
