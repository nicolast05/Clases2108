import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: "[mi-directiva]"
})

export class AppDirectiva {
  colorOriginal: string = "red"
  fondoOriginal: string = "transparent"

  colorHover: string = "green"
  fondoHover: string = "yellow"

  constructor(private ref: ElementRef) { }

  @HostBinding("style.font-size") tamanoletra = "15px"

  ngOnInit() {
    this.ref.nativeElement.style.color = this.colorOriginal
    this.ref.nativeElement.style.backgroundColor = this.fondoOriginal
  }

  @HostListener("mouseenter") entra() {
    this.ref.nativeElement.style.color = this.colorHover
    this.ref.nativeElement.style.backgroundColor = this.fondoHover
    this.tamanoletra = "50px"
  }

  @HostListener("mouseleave") sale() {
    this.ref.nativeElement.style.color = this.colorOriginal
    this.ref.nativeElement.style.backgroundColor = this.fondoOriginal
    this.tamanoletra = "15px"
  }

  @HostListener("click") presiona() {
    this.entra()
  }


}
