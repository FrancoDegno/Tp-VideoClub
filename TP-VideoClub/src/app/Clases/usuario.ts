import { Pelicula } from "./pelicula";

export class Usuario {
    id:number;
    nombre:string;
    apellido:string;
    usuario:string;
    contrasena:string;
    telefono:string;
    correo:string;
    estado:string;
    histPeliculas:string[]

        constructor(values:Object={})
        {
            Object.assign(this,values);
        }
}
