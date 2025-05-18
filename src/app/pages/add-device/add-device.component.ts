import { Component, EventEmitter, Output } from '@angular/core';
import { HouseholdDevice } from '../../models/household-device.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-device',
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatButtonModule],
  templateUrl: './add-device.component.html',
  styleUrl: './add-device.component.scss'
})


export class AddDeviceComponent {
  newDevice: 
  HouseholdDevice = {
    id: '',
    name: '',
    type: 'dishwasher',
    brand: '',
  };

  @Output() deviceAdded = new EventEmitter<HouseholdDevice>();

  onSubmit() {
    this.newDevice.id = crypto.randomUUID(); // egyedi ID generálás
    this.deviceAdded.emit({ ...this.newDevice });
    this.newDevice = {
      id: '',
      name: '',
      type: 'fridge',
      brand: '',
    };
  }
}

