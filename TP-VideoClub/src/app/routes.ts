import {Routes} from '@angular/router';
import { ListarPeliculasComponent } from './Components/listar-peliculas/listar-peliculas.component';
import { AltaPeliculaComponent } from './Components/alta-pelicula/alta-pelicula.component';
import { BajaPeliculaComponent } from './Components/baja-pelicula/baja-pelicula.component';
import { ModifPeliculaComponent } from './Components/modif-pelicula/modif-pelicula.component';
import { AltaUserComponent } from './Components/alta-user/alta-user.component';
import { BajaUserComponent } from './Components/baja-user/baja-user.component';
import { ModifUserComponent } from './Components/modif-user/modif-user.component';
import { ListarUsuariosComponent } from './Components/listar-usuarios/listar-usuarios.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { DetallePeliculaComponent } from './Components/detalle-pelicula/detalle-pelicula.component';
import { HistorialUsuarioComponent } from './Components/historial-usuario/historial-usuario.component';
import { TopPeliculasComponent } from './Components/top-peliculas/top-peliculas.component';

export const routes:Routes=[
    {path:'logIn',component:LoginUserComponent },
     {path:'ListaPeliculas',component:ListarPeliculasComponent},
     {path:'registerMovie',component:AltaPeliculaComponent},
     {path:'deleteMovie',component:BajaPeliculaComponent},
     {path:'modifMovie',component:ModifPeliculaComponent},
     {path:'registerUser',component:AltaUserComponent},
     {path:'deleteUser',component:BajaUserComponent},
     {path:'modifUser',component:ModifUserComponent},
     {path:'ListaUser',component:ListarUsuariosComponent},
     {path:'detailMovie',component:DetallePeliculaComponent},
     {path:'histUser',component:HistorialUsuarioComponent},
     {path:'topMovie',component:TopPeliculasComponent},
    // {path:'editarTarea/:id',component:FormTareaComponent},
    // {path:'',redirectTo:'tareas',pathMatch:'full'},
     {path:'**',redirectTo:'logIn'}

]