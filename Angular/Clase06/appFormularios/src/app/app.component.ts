import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  group: FormGroup

  constructor() { }

  ngOnInit() {
    this.group = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      nombre: new FormControl("Sergio", Validators.required),
      contrasena: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      edad: new FormControl(null, Validators.required)
    })
  }


  registrar() {
  }

  cargarData() {
  }

  cargarDataParcial() {
  }
}
