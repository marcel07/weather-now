import { Component, OnInit } from '@angular/core';
import { MdInputContainer } from '@angular/material';
import { FormControlDirective } from '@angular/forms';

import { LocationsService } from './../services/locations.service';

@Component({
    selector: 'location-form',
    templateUrl: 'location-form.component.html',
    providers: [LocationsService]
})

export class LocationFormComponent implements OnInit {

    requestType: string = '';
    cityName: string = '';
    countryCode: string = '';
    lat: number = 0;
    lng: number = 0;
    cityId: string = '';
    zipCode: string = '';
    value: string;

    constructor(private _locationsService: LocationsService) { }

    private add(): void{
        this.requestType = this.value;
        if(this.requestType === 'G'){
            this._locationsService.addCoordinates(this.lat, this.lng);
        } else if(this.requestType === 'C'){
            this._locationsService.addCityName(this.cityName, this.countryCode);
        } else if( this.requestType === 'Z'){
            this._locationsService.addZipCode(this.zipCode, this.countryCode);
        } else if(this.requestType === 'I'){
            this._locationsService.addCityId(this.cityId);
        }
    }

    ngOnInit() { 
        
    }
}