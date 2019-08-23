import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { EdicionAlumnoComponent } from './edicion-alumno/edicion-alumno.component';
import { Routes, RouterModule } from "@angular/router"
import { AutenticacionGuard } from './guards/autenticacion.guard';
import { AutorizacionGuard } from './guards/autorizacion.guard';

const rutas: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "alumno", canActivate: [AutenticacionGuard], children: [
      { path: "", component: ListadoAlumnoComponent },
      { path: "nuevo", component: NuevoAlumnoComponent },
      { path: "edicion", component: EdicionAlumnoComponent },
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoAlumnoComponent,
    NuevoAlumnoComponent,
    EdicionAlumnoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
