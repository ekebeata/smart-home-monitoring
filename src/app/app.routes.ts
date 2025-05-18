import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
        //canActivate: [authGuard]
    },
    {
        path: 'deviceList',
        loadComponent: () => import('./pages/device-list/device-list.component').then(m => m.DeviceListComponent),
        //canActivate: [authGuard]
    },
    /*{
        path: 'deviceItem',
        loadComponent: () => import('./pages/device-item/device-item.component').then(m => m.DeviceItemComponent),
        //canActivate: [authGuard]
    },*/
    {
        path: 'activeDevices',
        loadComponent: () => import('./pages/active-devices/active-devices.component').then(m => m.ActiveDevicesComponent),
        //canActivate: [authGuard]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '**', component: PageNotFoundComponent },

];
