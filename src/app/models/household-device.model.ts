export class HouseholdDevice {
}

export interface HouseholdDevice {
  id: string;
  name: string;
  type: ApplianceType;
  brand: string;
}

export type ApplianceType = 'washing_machine' | 'fridge' | 'oven' | 'dishwasher';

export interface UsageStatus {
  deviceId: string;
  isRunning: boolean;
  lastStarted: Date;
}

export interface PowerConsumption {
  deviceId: string;
  currentWatt: number;
  totalTodayWh: number;
}
