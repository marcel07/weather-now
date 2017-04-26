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

    save(){
        if(this.apiKey){
            this.settings[0] = ({
                apiKey: this.apiKey,
                unitType: this.unitType
            })   
            this._settingsService.set(this.settings[0]);
        }
    }

    ngOnInit() { 
    }
}