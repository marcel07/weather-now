import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { SettingsService } from './../services/settings.service';
import { Settings } from './../interfaces/settings';
import { Forecast } from './../interfaces/forecast';
import { Location } from './../interfaces/location';


@Injectable()
export class WeatherService{
    
    private baseUrl: string = 'http://api.openweathermap.org/data/2.5/forecast';

    constructor(private _http: Http, private _settingsService: SettingsService){}

    public getForecastByLocation(location: Location): Observable<Forecast[]>{

        switch(location.requestType){
            case 'I':
                return this.getForecastByCityId(location.cityId);
            case 'G':
                return this.getForecastByCoords(location.lat, location.lng);
            case 'Z':
                return this.getForecastByZipCode(location.zipCode, location.countryCode);
            case 'C':
                return this.getForecastByCityName(location.cityName, location.countryCode);
        }

    }


    public getForecastByCityId(cityId: string): Observable<Forecast[]>{
         return this.request({ id: cityId });
    }
    
    public getForecastByCoords(lat: number, lng: number): Observable<Forecast[]>{
        return this.request({
            lon: lng,
            lat: lat,
        });        
    }
    
    public getForecastByZipCode(zipCode: string, countryCode: string): Observable<Forecast[]>{
        return this.request({zip: zipCode + ", " + countryCode});
    }

    public getForecastByCityName(cityName: string, countryCode: string): Observable<Forecast[]>{
        return this.request({ q: cityName + ',' + countryCode });
    }


    private request(params: any){

        params.appid = this._settingsService.get('apiKey');
        params.units = this._settingsService.get('unitType');

        return this._http.get(this.baseUrl, {
            params: params
        }).map(res => {
            return this.convertApiResponse(res);
        });
    }

    private convertApiResponse(res: Response): Forecast[]{

        let data = res.json();
        let forecasts: Forecast[] = []; 

        for(let i = 0; i < 33; i++){
            forecasts.push({
                dateTime: data['list'][i]['dt_txt'],
                tempMax: Math.round(data['list'][i]['main']['temp_max']),
                tempMin: Math.round(data['list'][i]['main']['temp_min']),
                tempAvg: Math.round(data['list'][i]['main']['temp']),
                conditions: data['list'][i]['weather'][0]['description'],
                conditionsIcon: data['list'][i]['weather'][0]['icon'],
                windSpeed: Math.round(data['list'][i]['wind']['speed']),
                windDirection: Math.round(data['list'][i]['wind']['deg']),
                unitType: <string> this._settingsService.get('unitType')
            });
        }
    
        return forecasts;
    }




}
    
