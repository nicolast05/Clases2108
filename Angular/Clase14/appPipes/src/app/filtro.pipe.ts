import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<any>, busqueda: string): any {

    const newArray = value.filter(item => item.autor.indexOf(busqueda) > -1)
    return newArray;
  }

}
