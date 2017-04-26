import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { 
  MdSidenavModule, 
  MdButtonModule, 
  MdSelectModule, 
  MdDialogModule, 
  MdIconModule,
  MdInputModule,
  MdToolbarModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { SettingsComponent } from './components/settings.component';
import { LocationsComponent } from './components/locations.component';
import { LocationFormComponent } from './components/location-form.component';

import { ROUTES } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    LocationsComponent,
    LocationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdSidenavModule, 
    MdButtonModule, 
    MdSelectModule, 
    MdDialogModule, 
    MdIconModule,
    MdInputModule,
    MdToolbarModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  entryComponents: [LocationFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
