import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = '1fbd74c6da744b918fc115322182907';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.apixu.com/v1/current.json?key='+this.apiKey+'&q';
  }

  getWeather(city){
    return this.http.get(this.url+'='+city)
    .map((res: Response) => res); 
  }
}
