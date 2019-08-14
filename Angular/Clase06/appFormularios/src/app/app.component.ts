import { Validadores } from './validadores';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


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
      correo: new FormControl(null, [Validators.required, Validators.email, Validadores.validadorCorreoEmpresarial]),
      nombre: new FormControl("Sergio", Validators.required),
      contrasena: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]{6,15}$/i)]),
      edad: new FormControl(null, [Validators.required, this.rangoEdades(18, 30)])
    })
  }

  rangoEdades(min: number, max: number) {
    const validadorEdades = (control: AbstractControl): { [s: string]: boolean } => {
      if (control && control.value) {
        const edad = +control.value

        if (edad >= min && edad <= max) return null

        return { edadProhibida: true }
      }

      return null
    }

    return validadorEdades
  }




  registrar() {
  }

  cargarData() {
  }

  cargarDataParcial() {
  }
}
