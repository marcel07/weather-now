export interface Forecast{
    dateTime: string;
    tempMax: number;
    tempMin: number;
    tempAvg: number;
    conditions: string;
    conditionsIcon: string;
    windSpeed: number;
    windDirection: number;
    unitType: string;
}