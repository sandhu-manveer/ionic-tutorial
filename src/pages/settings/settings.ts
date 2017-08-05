import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  countries: any;
  selectCountry: null;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.nav = nav;
    this.countries = [
      {
        name: 'United States',
        local_name: 'USA',
        code: 'US',
        currency: '$'
      },
      {
        name: 'United Kingdom',
        code: 'UK',
        local_name: 'The UK',
        currency: '£'
      },
      {
        name: 'Russia',
        local_name: 'Россия',
        code: 'RU'
      },
      {
        name: 'Israel',
        rtl: true,
        code: '',
        local_name: 'יִשְׂרָאֵל'
      }
    ];
  }

  printValue(e) {
    console.log(e);
  }

  ionViewDidLoad() {
    console.log(this.countries);
  }

}
