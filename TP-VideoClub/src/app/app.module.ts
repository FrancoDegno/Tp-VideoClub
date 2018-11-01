import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import { MovieServiceService } from 'src/app/Services/movie-service.service';

import {routes} from './routes'
import { AppComponent } from './app.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { AltaUserComponent } from './Components/alta-user/alta-user.component';
import { BajaUserComponent } from './Components/baja-user/baja-user.component';
import { ModifUserComponent } from './Components/modif-user/modif-user.component';
import { AltaPeliculaComponent } from './Components/alta-pelicula/alta-pelicula.component';
import { BajaPeliculaComponent } from './Components/baja-pelicula/baja-pelicula.component';
import { ModifPeliculaComponent } from './Components/modif-pelicula/modif-pelicula.component';
import { ListarPeliculasComponent } from './Components/listar-peliculas/listar-peliculas.component';
import { ListarUsuariosComponent } from './Components/listar-usuarios/listar-usuarios.component';
import { DetallePeliculaComponent } from './Components/detalle-pelicula/detalle-pelicula.component';
import { UserServiceService } from './Services/user-service.service';
import { HistorialUsuarioComponent } from './Components/historial-usuario/historial-usuario.component';
import { TopPeliculasComponent } from './Components/top-peliculas/top-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    AltaUserComponent,
    BajaUserComponent,
    ModifUserComponent,
    AltaPeliculaComponent,
    BajaPeliculaComponent,
    ModifPeliculaComponent,
    ListarPeliculasComponent,
    ListarUsuariosComponent,
    DetallePeliculaComponent,
    HistorialUsuarioComponent,
    TopPeliculasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [MovieServiceService,UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
