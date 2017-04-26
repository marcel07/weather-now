import { Injectable, OnInit } from '@angular/core';

import { Settings } from './../interfaces/settings';

@Injectable()
export class SettingsService {
    
    private currentSettings: Settings;

    constructor(){
        this.load();
    }

    public get(key: string): any{
        return this.currentSettings[key];
    }

    public set(settings: Settings): void{
        this.currentSettings = settings;
        this.save();
    }

    public reset(): void{
        this.setDefaults();
        this.save();
    }

    private save(){
        localStorage.setItem('settings', JSON.stringify(this.currentSettings));
    }

    private load(){

        let storedSettings = localStorage.getItem('settings');
        if(storedSettings === null){
            this.setDefaults();
            console.log('new settings', this.currentSettings);
        }else{
            this.currentSettings = <Settings> JSON.parse(localStorage.getItem('settings'));
            console.log('loaded settings', this.currentSettings);
        }
    }

    private setDefaults(){
        this.currentSettings = {
            apiKey: '',
            unitType: 'kelvin'
        };
    }



}