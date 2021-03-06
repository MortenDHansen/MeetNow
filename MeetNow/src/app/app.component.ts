import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Events } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import {AlertController} from "ionic-angular";


@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, public alertCtrl: AlertController, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      StatusBar.styleDefault();
      Splashscreen.hide();

      // listn for search events and display a suggestion
        events.subscribe('search:start', () => {

          this.meetSuggestionConfirm("Marcus Schmitt", 24, "man");
        });

        this.startSearch();


    }

    );

  }

  // Display a suggestion
  public meetSuggestionConfirm(name: string, age: number, gender: string) {
    let alert = this.alertCtrl.create({
      title: 'An interresting person is nearby!',
      message: 'Would you like to meet ' + name + " - He is a " + age + " year old " + gender,
      buttons: [
        {
          text: 'No, thank you',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked, next');
          }
        },
        {
          text: 'Yes, lets meet!',
          handler: () => {
            console.log('Yes is clicked - Do action');
          }
        }
      ]
    });
    alert.present();
  }

  // would you like to start searching? Pulishes search event.
  public startSearch() {
    let alert = this.alertCtrl.create({
      title: 'Start Search',
      message: 'Do you want to search for nearby interresting people?',
      buttons: [
        {
          text: 'No, not now',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked, next');
          }
        },
        {
          text: 'Yes, hook me up!',
          handler: () => {
            sleep(1000);
            this.events.publish('search:start');
          }
        }
      ]
    });
    alert.present();
  }


  // Sleep, break stop... Just fucking wait
  public sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

}
