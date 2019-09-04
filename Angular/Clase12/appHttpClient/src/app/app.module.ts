import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EditarComponent } from './editar/editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevoComponent } from './nuevo/nuevo.component';

const rutas: Routes = [
  {
    path: "alumno", children: [
      {
        path: "editar/:_id", component: EditarComponent
      },
      {
        path: "nuevo", component: NuevoComponent
      }
    ]
  }

]


@NgModule({
  declarations: [
    AppComponent,
    EditarComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
