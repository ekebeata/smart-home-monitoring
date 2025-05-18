import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerFormat'
})
export class PowerFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + ' kWh';
    }
    return value + ' Wh';
  }

}

