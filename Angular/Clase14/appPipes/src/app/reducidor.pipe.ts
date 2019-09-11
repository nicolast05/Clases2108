import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: "reducidor"
})

export class ReducidorPipe implements PipeTransform {
  transform(value: string, maxIndicator: number, type: string): string {
    if (type == "A") {
      return value.substring(0, maxIndicator)
    } else {
      return value.split(" ").slice(0, maxIndicator).join(" ")
    }

  }
}
