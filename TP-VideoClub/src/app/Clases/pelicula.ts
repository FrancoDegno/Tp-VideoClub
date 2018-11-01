export class Pelicula {
    id:number;
    titulo:string;
    descripcion:string;
    imagen:string;
    genero:string;
    alquilada:boolean=false;
    valoracion:number=0;
    cantidadAlquileres:number=0;
    cantRaiting:number=0;


    constructor(values:Object={}){
          Object.assign(this,values);
    }
    

}


