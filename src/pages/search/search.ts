import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import { ItunesProvider } from '../../providers/itunes/itunes';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  results: any;
  keyword: string;

  constructor(public nav: NavController,
    public navParams: NavParams,
    public http: Http,
    public itunes: ItunesProvider) {
      this.nav = nav;
      this.http = http;
      this.results = [];
      this.keyword = '';
      this.itunes = itunes;
  }

  keyHasBeenPressed(event) {
    if(event.keyIdentifier === 'Enter' || event.keyCode === 13) {
      this.itunes.search(this.keyword)
        .then((results) => {
          this.results = results
        })
        .catch((err) => console.log(err));
    }
  }

  userPressedCancel() {
    this.results = [];
    this.keyword = '';
  }
}