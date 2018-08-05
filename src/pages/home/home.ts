import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loc:void;
  currentWeather: any;

  location:{
    city:string
  }

  constructor(public navCtrl: NavController,
     private weatherProvider:WeatherProvider,
     private storage:Storage) {

  }
  
  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val!= null){
        this.location=JSON.parse(val);
      } else {
        this.location={
          city:'amravati'
        }
      }

      this.weatherProvider.getWeather(this.location.city).subscribe(data => {
        console.log(data);
        this.loc= data.json().location;
        this.currentWeather = data.json().current;
      });   
    }); 
  } 
}

