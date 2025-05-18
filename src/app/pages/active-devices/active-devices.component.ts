import { Component, OnInit } from '@angular/core';
import { HouseholdDevice } from '../../models/household-device.model';
import { DeviceService } from '../../shared/services/device.service';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-active-devices',
  imports: [MatCardModule],
  templateUrl: './active-devices.component.html',
  styleUrl: './active-devices.component.scss'
})

export class ActiveDevicesComponent implements OnInit {
  activeDevices: HouseholdDevice[] = [];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.getDevices().subscribe(devices => {
      //this.activeDevices = devices.filter(d => d.status === true);
    });
  }
}

