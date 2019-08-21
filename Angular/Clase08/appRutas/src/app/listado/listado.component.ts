import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  pag
  tam
  ord

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pag = this.activatedRoute.snapshot.queryParamMap.get("pag")
    this.tam = this.activatedRoute.snapshot.queryParamMap.get("tam")
    this.ord = this.activatedRoute.snapshot.queryParamMap.get("ord")
  }

}
