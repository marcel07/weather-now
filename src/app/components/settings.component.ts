import { Component, OnInit } from '@angular/core';

import { Settings } from './../interfaces/settings';
import { SettingsService } from './../services/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: 'settings.component.html',
    styles: [`:host { display: flex; flex: grow; }`],
    providers: [SettingsService]
})

export class SettingsComponent implements OnInit {
    
    apiKey: string;
    unitType: string;
    settings: Settings[] = [];

    constructor(private _settingsService: SettingsService) { 
    }

    private save(){
        if(this.apiKey){
            this.settings[0] = ({
                apiKey: this.apiKey,
                unitType: this.unitType
            })   
            this._settingsService.set(this.settings[0]);
        }
    }

    private load(){
        console.log(localStorage.getItem('settings') !== null)
        if(localStorage.getItem('settings') !== null){
            this.unitType = this._settingsService.get('unitType'); 
            this.apiKey = this._settingsService.get('apiKey');
        }else{
            this.apiKey = '';
        }
    }

    ngOnInit() { 
        this.load();
        console.log(this.apiKey)
    }
}