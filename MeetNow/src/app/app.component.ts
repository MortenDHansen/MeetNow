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

  constructor(platform: Platform, private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.makeAlert();
      StatusBar.styleDefault();
      Splashscreen.hide();



    }

    );

  }

  public makeAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nearby Match',
      message: 'Do you want to meet?',
      buttons: [
        {
          text: 'No, thank you',
          role: 'cancel',
          handler: () => {
            console.log('Callback NO');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Callback Yes');
          }
        }
      ]
    });
    alert.present();
  }
}
