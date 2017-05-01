import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { LocationFormComponent } from './location-form.component';

import { LocationsService } from './../services/locations.service';

import { Location } from './../interfaces/location';

@Component({
    selector: 'locations',
    templateUrl: 'locations.component.html',
    styleUrls: ['./locations.component.css'],
    providers: [LocationsService]
})

export class LocationsComponent implements OnInit {
    
    savedLocations: Location[] = this._locationsService.locations;
    cityName: string;
    countryCode: string;
    lat: number;
    lng: number;
    zipCode: string;
    cityId: string;

    constructor(private _mdDialog: MdDialog, private _locationsService: LocationsService) { }

    add(){
        let locationForm = this._mdDialog.open(LocationFormComponent);
    }
    
    ngOnInit() {
    }
}