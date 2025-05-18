import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deviceType'
})
export class DeviceTypePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'washing_machine': return 'Mosógép';
      case 'fridge': return 'Hűtőszekrény';
      case 'oven': return 'Sütő';
      case 'dishwasher': return 'Mosogatógép';
      default: return 'Ismeretlen';
    }
  }
}
