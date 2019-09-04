import { Component } from '@angular/core';
import { AlumnoService } from './alumno.service';
import { Alumno } from './alumno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lista: Alumno[]

  constructor(private alumnosService: AlumnoService, private router: Router) { }

  ngOnInit() {
    this.listar()

    this.alumnosService.onActualizar.subscribe(
      () => this.listar()
    )
  }

  listar() {
    this.alumnosService.listar()
      .subscribe(resp => this.lista = resp)
  }

  editar(_id: string) {
    this.router.navigate(["/alumno", "editar", _id])
  }

  nuevo() {
    this.router.navigate(["/alumno", "nuevo"])
  }
}
