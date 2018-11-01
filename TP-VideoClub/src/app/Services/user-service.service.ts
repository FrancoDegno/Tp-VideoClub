import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Clases/usuario';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url:string='http://localhost:3000/usuarios';


  usuarios:Observable<Usuario[]>
  usuarios2:Usuario[];
  loginUser:string;

  constructor(private _http:HttpClient) { 
    this.usuarios2=[];
  }

  logOut()
  {
    this.loginUser=null;
  }

  addUsuario(usuario:Usuario):Observable<Usuario>
  {
    return this._http.post<Usuario>(this.url,usuario)
    
  }

  removeUsuario(id:number):Observable<Usuario>
  {
    return this._http.delete<null>(this.url+"/"+id);
  }

  updateUsuario(usuario:Usuario)
  {
    return this._http.put(this.url+"/"+usuario.id,usuario);
  }

  listUsuarios():Observable<Usuario[]>
  {   
    
    this.usuarios=this._http.get<Usuario[]>(this.url);
    this.usuarios.subscribe(response=>{
      this.usuarios2=response;
    })

    return this.usuarios;
  }
}
