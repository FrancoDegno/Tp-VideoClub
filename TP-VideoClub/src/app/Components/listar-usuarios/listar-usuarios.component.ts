import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  constructor(private _service:UserServiceService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll()
  {
    this._service.listUsuarios().subscribe(
      response=>{
        
      }
    )
  }

  logOut()
  {
    this._service.logOut();
  }

}
