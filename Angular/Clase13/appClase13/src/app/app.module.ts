import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EdicionAlumnoComponent } from './edicion-alumno/edicion-alumno.component';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EdicionAlumnoComponent,
    ListadoAlumnoComponent,
    NuevoAlumnoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
