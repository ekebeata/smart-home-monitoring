import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOUSEHOLD_DEVICES, DEVICE_STATUSES, DEVICE_POWER } from '../../shared/household-data';
import { DeviceItemComponent } from '../device-item/device-item.component';
import { DeviceTypePipe } from '../../shared//pipes/device-type.pipe';
import { PowerFormatPipe } from '../../shared//pipes/power-format.pipe';
import { HouseholdDevice } from '../../models/household-device.model';
import { AddDeviceComponent } from '../add-device/add-device.component';
import { DeviceService } from '../../shared/services/device.service'

@Component({
  selector: 'app-device-list',
  imports: [CommonModule, DeviceItemComponent, DeviceTypePipe, PowerFormatPipe, AddDeviceComponent],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.scss'
})

export class DeviceListComponent implements OnInit {
  devices: HouseholdDevice[] = [];
  
  //devices = HOUSEHOLD_DEVICES;
  statuses = DEVICE_STATUSES;
  powers = DEVICE_POWER;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.loadDevices();
  }

   loadDevices(): void {
    this.deviceService.getDevices().subscribe(devices => {
      this.devices = devices;
    });
  }

  getStatus(deviceId: string) {
    return this.statuses.find(s => s.deviceId === deviceId)!;
  }

  getPower(deviceId: string) {
    return this.powers.find(p => p.deviceId === deviceId)!;
  }

  onToggle(deviceId: string) {
    const status = this.getStatus(deviceId);
    status.isRunning = !status.isRunning;
    status.lastStarted = new Date();
  }

  onRemove(id: string): void {
    this.deviceService.deleteDevice(id).subscribe(() => {
      this.loadDevices();
    });
  }

  onDetails(deviceId: string) {
    alert(`Részletek az eszközről: ${deviceId}`);
  }

  onDeviceAdded(newDevice: HouseholdDevice): void {
    this.deviceService.addDevice(newDevice).subscribe(() => {
      this.loadDevices();
    });
  }

  onEdit(device: HouseholdDevice): void {
    const updated = { ...device, name: device.name + ' (módosítva)' };
    this.deviceService.updateDevice(updated).subscribe(() => {
      this.loadDevices();
    });
  }

}


