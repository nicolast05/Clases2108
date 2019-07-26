import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mostrar: boolean = false

  constructor() { }

  ngOnInit() {
  }

  mostrarCorreo() {
    this.mostrar = !this.mostrar
  }

}
