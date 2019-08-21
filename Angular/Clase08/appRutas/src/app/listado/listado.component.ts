import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  pag: number
  tam: number
  ord: string

  personas = []

  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.pag = +this.activatedRoute.snapshot.queryParamMap.get("pag")
    this.tam = +this.activatedRoute.snapshot.queryParamMap.get("tam")
    this.ord = this.activatedRoute.snapshot.queryParamMap.get("ord")

    this.listar()
  }

  listar() {
    this.personas = this.usuarioService.listado(this.pag, this.tam, this.ord)
  }

}
