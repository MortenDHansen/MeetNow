import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import {AlertController} from "ionic-angular";


@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      StatusBar.styleDefault();
      Splashscreen.hide();

      this.meetSuggestionConfirm("Marcus Schmitt", 24, "man");

    }

    );

  }
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


}
