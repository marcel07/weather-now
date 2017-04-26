import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { LocationsService } from './../services/locations.service';
import { Forecast } from './../interfaces/forecast';
import { Location } from './../interfaces/location';
import { WeatherService } from './../services/weather.service';
import { SettingsService } from './../services/settings.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [LocationsService, WeatherService, SettingsService]
})

export class HomeComponent implements OnInit {

    protected baseUrl: string = 'http://api.openweathermap.org/data/2.5/forecast'
    
    locationWeatherArray: any[] = [];
    hasLocations: boolean = false;
   
    constructor(
        private _http: Http, 
        private _locationsService: LocationsService, 
        private _weatherService: WeatherService, 
        private _settingsService: SettingsService) { }

    
    ngOnInit() {
        let locations = this._locationsService.all();
        
        if(locations.length > 0){
            this.hasLocations = true;
        } else {
            this.hasLocations = false;
        }
        
        for(let location of locations){
            this.locationWeatherArray.push({
                location: location,
                weather: null
            });
        }

        for(let locationWeather of this.locationWeatherArray){
            locationWeather.weather = this._weatherService.getForecastByLocation(locationWeather.location);
        } 

    }

}






