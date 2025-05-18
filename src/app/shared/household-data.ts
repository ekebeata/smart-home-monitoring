import { HouseholdDevice, UsageStatus, PowerConsumption } from '../models/household-device.model';

export const HOUSEHOLD_DEVICES: HouseholdDevice[] = [
  { id: '1', name: 'Mosógép', type: 'washing_machine', brand: 'Samsung'},
  { id: '2', name: 'Hűtőszekrény', type: 'fridge', brand: 'LG'},
  { id: '3', name: 'Sütő', type: 'oven', brand: 'Bosch'},
  { id: '4', name: 'Mosogatógép', type: 'dishwasher', brand: 'Whirlpool'},
];

export const DEVICE_STATUSES: UsageStatus[] = [
  { deviceId: '1', isRunning: true, lastStarted: new Date('2025-05-15T08:30:00') },
  { deviceId: '2', isRunning: true, lastStarted: new Date('2025-05-14T00:00:00') },
  { deviceId: '3', isRunning: false, lastStarted: new Date('2025-05-13T17:00:00') },
  { deviceId: '4', isRunning: false, lastStarted: new Date('2025-05-12T21:00:00') },
];

export const DEVICE_POWER: PowerConsumption[] = [
  { deviceId: '1', currentWatt: 250, totalTodayWh: 1000 },
  { deviceId: '2', currentWatt: 80, totalTodayWh: 1800 },
  { deviceId: '3', currentWatt: 0, totalTodayWh: 400 },
  { deviceId: '4', currentWatt: 0, totalTodayWh: 700 },
];

// Extra kollekció – típuslista
export const DEVICE_TYPES = ['washing_machine', 'fridge', 'oven', 'dishwasher'];
