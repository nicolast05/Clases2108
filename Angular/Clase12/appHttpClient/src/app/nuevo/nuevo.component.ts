import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../alumno.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  _id: string
  grupo: FormGroup

  constructor(private activateRoute: ActivatedRoute, private alumnoService: AlumnoService, private router: Router) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      _id: new FormControl(),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required)
    })




  }

  guardar() {
    this.alumnoService.insertar(this.grupo.getRawValue())
      .subscribe(resp => {
        this.alumnoService.onActualizar.next()
        alert("Graboooooo!!")
      })

  }

  volver() {
    this.router.navigate(["/"])
  }

}
