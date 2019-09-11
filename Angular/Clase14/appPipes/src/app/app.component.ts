import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPipes';

  texto = "sadasdasdasdasdsf gr gtt gt gtgt t t tgtg t gt gt gt gtgtgtgt g tg tg tgtg t gt gt gt gt rerererer eretrterterterte rtertert ertert erterter tetertertert erterterte rtert"

  libros = [
    {
      titulo: "la ciudad", autor: "sss", sinopsis: "blablaabla"
    },
    {
      titulo: "la extos", autor: "ddd", sinopsis: "blebleble"
    },
    {
      titulo: "la pperfume", autor: "fff", sinopsis: "blobloblo"
    }
  ]

  busqueda = ""

}
