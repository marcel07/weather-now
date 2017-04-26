import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { SettingsComponent } from './components/settings.component';
import { LocationsComponent } from './components/locations.component';

export const ROUTES: Routes = [
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        },
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'settings',
            component: SettingsComponent
        },
        {
            path: 'locations',
            component: LocationsComponent
        }
    ];