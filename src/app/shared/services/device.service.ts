import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HouseholdDevice } from '../../models/household-device.model';
import { Firestore, collection, query, where, orderBy, limit, getDocs, startAfter } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class DeviceService {
  /*private firestore = inject(Firestore);

  async getInactiveDevices() {
    const devicesRef = collection(this.firestore, 'devices');
    const q = query(
      devicesRef,
      where('isActive', '==', false),
      orderBy('type'),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  }

   async getDevicesPage(lastVisibleDoc: any) {
    const devicesRef = collection(this.firestore, 'devices');
    const q = query(
      devicesRef,
      orderBy('createdAt', 'desc'),
      startAfter(lastVisibleDoc),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    const devices = querySnapshot.docs.map(doc => doc.data());
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    return { devices, lastVisible };
  }

   async getDevicesByTypeAndBrand(type: string, brand: string) {
    const devicesRef = collection(this.firestore, 'devices');
    const q = query(
      devicesRef,
      where('type', '==', type),
      where('brand', '==', brand)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  }

  async getDevicesByBrandAndType(brand: string, type: string) {
    const devicesRef = collection(this.firestore, 'devices');
    const q = query(
      devicesRef,
      where('brand', '==', brand),
      where('type', '==', type),
      orderBy('brand'),
      orderBy('type')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  }
  */
  private devices: HouseholdDevice[] = [
    { id: '1', name: 'Mosógép', type: 'washing_machine', brand: 'Samsung'},
    { id: '2', name: 'Hűtő', type: 'fridge', brand: 'LG'},
    { id: '3', name: 'Mosógép', type: 'washing_machine', brand: 'Samsung'},
    { id: '4', name: 'Hűtőszekrény', type: 'fridge', brand: 'LG'},
    { id: '5', name: 'Sütő', type: 'oven', brand: 'Bosch'},
    { id: '6', name: 'Mosogatógép', type: 'dishwasher', brand: 'Whirlpool'},
  ];

  private devicesSubject = new BehaviorSubject<HouseholdDevice[]>(this.devices);

  // read
  getDevices(): Observable<HouseholdDevice[]> {
    return this.devicesSubject.asObservable();
  }

  // create
  addDevice(device: HouseholdDevice): Observable<HouseholdDevice> {
    device.id = crypto.randomUUID();
    this.devices.push(device);
    this.devicesSubject.next(this.devices);
    return of(device);
  }

  // update
  updateDevice(updatedDevice: HouseholdDevice): Observable<HouseholdDevice | null> {
    const index = this.devices.findIndex(d => d.id === updatedDevice.id);
    if (index > -1) {
      this.devices[index] = { ...updatedDevice };
      this.devicesSubject.next(this.devices);
      return of(updatedDevice);
    }
    return of(null);
  }

  // delete
  deleteDevice(id: string): Observable<boolean> {
    const originalLength = this.devices.length;
    this.devices = this.devices.filter(d => d.id !== id);
    this.devicesSubject.next(this.devices);
    return of(this.devices.length < originalLength);
  }
}

