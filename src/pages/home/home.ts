import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  theSearchPage: typeof SearchPage;
  nav: NavController;
  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
    this.theSearchPage = SearchPage;
  }

  goToSearch() {
    this.nav.push(SearchPage);
  }

  goToSearchAsRoot() {
    this.nav.setRoot(SearchPage);
  }

}
