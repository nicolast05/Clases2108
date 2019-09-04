import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estado: string = ''
  personas: Promise<any[]>
  recetas: any[]
  error: any

  constructor() {
    const promesa: Promise<any[]> = new Promise(
      (resolve, reject) => {

        const xhttp: XMLHttpRequest = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
          if (xhttp.status == 200 && xhttp.readyState == 4) {
            console.log(xhttp.responseText)
            resolve(JSON.parse(xhttp.responseText).results)
          } else if (xhttp.status == 404) {
            reject(xhttp.statusText)
          }
        }
        xhttp.open("get", "http://clase.tibajodemanda.com/alumno")
        xhttp.send()

      }
    )

    /* const promesaReceta = new Promise(
      (resolve, reject) => {

        const xhttp: XMLHttpRequest = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
          if (xhttp.status == 200 && xhttp.readyState == 4) {
            console.log(xhttp.responseText)
            resolve(JSON.parse(xhttp.responseText))
          } else if (xhttp.status == 404) {
            reject(xhttp.statusText)
          }
        }
        xhttp.open("get", "http://clase.tibajodemanda.com/receta")
        xhttp.send()

      }
    ) */

    /* promesa.then(
      (respuesta: any) => {
        this.estado = respuesta.status
        this.personas = respuesta.results
        console.log(respuesta.results)
      },
      () => { console.log("fail") })

    promesaReceta.then(
      (respuesta: any) => {
        this.estado = respuesta.status
        this.recetas = respuesta.results
        console.log(respuesta.results)
      },
      () => { console.log("fail Receta") })

    Promise.all([promesa, promesaReceta])
      .then(
        (respuesta: any) => {
          this.estado = respuesta.status
          this.personas = respuesta.results
          console.log(respuesta.results)
        },
        () => { console.log("fail all") })

    Promise.race([promesa, promesaReceta])
      .then(
        (respuesta: any) => {
          this.estado = respuesta.status
          this.personas = respuesta.results
          console.log(respuesta.results)
        },
        () => { console.log("fail all") }) */

    /* promesa
      .then(
        (data: any) => {
          console.log(data.results)

          const promesaReceta = new Promise(
            (resolve, reject) => {

              const xhttp: XMLHttpRequest = new XMLHttpRequest()
              xhttp.onreadystatechange = function () {
                if (xhttp.status == 200 && xhttp.readyState == 4) {
                  console.log(xhttp.responseText)
                  resolve(JSON.parse(xhttp.responseText))
                } else if (xhttp.status == 404) {
                  reject(xhttp.statusText)
                }
              }
              xhttp.open("get", "http://clase.tibajodemanda.com/receta")
              xhttp.send()

            }
          )
          return promesaReceta

        }
      )
      .then(
        (data: any) => {
          console.log(data.results)
        }
      )
      .catch(error => console.log(error)) */

    /* try {
      this.personas = promesa.then()
    } catch (error) {
      console.error(error)
      this.error = error
    } */


  }
}
