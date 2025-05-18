import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { HouseholdDevice, UsageStatus, PowerConsumption } from '../../models/household-device.model';


@Component({
  selector: 'app-device-item',
  imports: [],
  templateUrl: './device-item.component.html',
  styleUrl: './device-item.component.scss'
})

export class DeviceItemComponent {
  // 3 db @Input – szülőtől jön
  @Input() device!: HouseholdDevice;
  @Input() status!: UsageStatus;
  @Input() power!: PowerConsumption;

  // 3db @Output – eseményt küld vissza a szülőnek
  @Output() toggle = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();
  @Output() showDetails = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status']) {
      console.log(`Status változott: ${this.device.name} →`, changes['status'].currentValue);
    }
    if (changes['power']) {
      console.log(`Fogyasztás változott: ${this.device.name} →`, changes['power'].currentValue);
    }
  }

  onToggle() {
    this.toggle.emit(this.device.id);
  }

  onRemove() {
    this.remove.emit(this.device.id);
  }

  onDetails() {
    this.showDetails.emit(this.device.id);
  }
}
