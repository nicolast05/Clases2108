import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from './alumno';
import { pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>("http://clase.tibajodemanda.com/alumno")
      .pipe(pluck("results"))
  }

  detallar(_id: string): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`http://clase.tibajodemanda.com/alumno/${_id}`)
      .pipe(pluck("result"))
  }

  insertar() { }

  modificar() { }

  eliminar() { }
}
