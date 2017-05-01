import { Injectable } from '@angular/core';

import { Location } from './../interfaces/location';

@Injectable()
export class LocationsService{

    public locations: Location[] = [];

    constructor(){
        this.load();
    }

    public addCityId(cityId: string): void{
        this.add({
            requestType: 'I',
            cityId: cityId,
        });
    }
    
    //same question about overriding(see settings.service)
    //only strings allowed to be saved. How do I combat this? Convert to when getting from localStorage?
    public addCoordinates(lat: number, lng: number): void{
        this.add({
            requestType: 'G',
            lat: lat,
            lng: lng
        })
    }

    //same question about overriding(see settings.service)
    public addCityName(cityName: string, countryCode: string): void{
        this.add({
            requestType: 'C',
            cityName: cityName,
            countryCode: countryCode
        })        
    }

    //same question about overriding(see settings.service)
    public addZipCode(zipCode: string, countryCode: string): void{
        this.add({
            requestType: 'Z',
            zipCode: zipCode,
            countryCode: countryCode
        });
    }

    public add(location: Location): void{
        this.locations.push(location);
        console.log("Locations Array here:", this.locations)
        this.save()
    }

    public remove(location: Location): void{
        this.locations.slice(this.locations.indexOf(location, 1));
        this.save();
    }

    public all(): Location[]{
        return this.locations;
    }

    private save(){
        localStorage.setItem('locations', JSON.stringify(this.locations))
    }

    private load(){

        let storedData = localStorage.getItem('locations');

        if(storedData){
            this.locations = JSON.parse(storedData);
        }else{
            this.locations = [];
            this.save();
        }
        
    }

    
}