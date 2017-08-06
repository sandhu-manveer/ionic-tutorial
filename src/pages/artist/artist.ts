import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ItunesProvider } from '../../providers/itunes/itunes';

/**
 * Generated class for the ArtistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html'
})
export class ArtistPage {
  artist: any;
  albums: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public itunes: ItunesProvider) {
    this.artist = navParams.data;
    this.itunes.loadAlbums(navParams.data.id)
      .then(albums => this.albums = albums);
  }

}
