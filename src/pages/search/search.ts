import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController, Keyboard, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { ItunesProvider } from '../../providers/itunes/itunes';

import { PreviewModal } from './preview';
import { ArtistPage } from '../artist/artist';

// TODO: Solve
// import * as ProgressIndicator from '../../../plugins/org.pbernasconi.progressindicator/www/progressIndicator';

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
  usersFilter: boolean;
  _unfilteredResults: any;

  constructor(public nav: NavController,
    public navParams: NavParams,
    public http: Http,
    public itunes: ItunesProvider,
    public actionSheet: ActionSheetController,
    public modal: ModalController,
    public alert: AlertController,
    private keyboard: Keyboard) {
      this.nav = nav;
      this.http = http;
      this.results = [];
      this.keyword = '';
      this.usersFilter = false;
      this._unfilteredResults = [];
      this.itunes = itunes;
      this.actionSheet = actionSheet;
      this.modal = modal;
  }

  reloadData(refresher) {
    this.results = [];
    this.itunes.search(this.keyword)
      .then(results => {
        refresher.complete();
        this.results = results;
      });
  }

  search(keyword) {
    // ProgressIndicator.showSimple();
    this.itunes.search(keyword)
        .then((results) => {
          if(!results.length) {
            let alert = this.alert.create({
              title: 'The iTunes API says...',
              subTitle: 'No Results Found',
              buttons: ["Try again"]
            });
            alert.present();
          } else {
            this.results = results;
            this._unfilteredResults = results;
            this.usersFilter = false;
          }
          // ProgressIndicator.hide();
        })
        .catch((err) => console.log(err));
  }

  keyHasBeenPressed(event) {
    if(event.keyIdentifier === 'Enter' || event.keyCode === 13) {
      this.keyboard.close();
      if(this.keyword === '') {
        let alert = this.alert.create({
          title: 'Please enter term to search',
          buttons: [
            'Cancel',
            {
              text: 'Search...',
              handler: data => {
                if(data.term) {
                  this.keyword = data.term;
                  this.search(this.keyword);
                } else return false;
              }
            }
          ],
          inputs: [
            {
              name: 'term',
              placeholder: 'Search for...'
            }
          ]
        });
        alert.present();
        return;
      }
      this.search(this.keyword);
    }
  }

  userPressedCancel() {
    this.results = [];
    this.keyword = '';
  }

  openPreview(track) {
    let alert = this.alert.create({
      title: 'Are you sure?',
      buttons: [
        'Nah',
        {
          text: 'Yes',
          handler: () => {
            alert.dismiss()
              .then(() => {
                let modal = this.modal.create(PreviewModal, {
                  track: track
                });
                modal.present();
              });
            return false;
          }
        }
      ]
    });
    alert.present();
  }

  openFilters() {
    let sheet = this.actionSheet.create({
      title: 'Filter By...',
      buttons: [
        {
          text: 'Movies Only',
          handler: () => {
            this.results = this._unfilteredResults.filter(
              (item) => item.kind === 'feature-movie'
            );
            this.usersFilter = true;
          }
        },
        {
          text: 'Songs Only',
          handler: () => {
            this.results = this._unfilteredResults.filter(
              (item) => item.kind === 'song'
            );
            this.usersFilter = true;
          }
        },
        {
          text: 'Clear',
          role: 'destructive',
          handler: () => {
            this.results = this._unfilteredResults;
            this.usersFilter = false;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    sheet.present();
  }

  goToArtist(result) {
    this.nav.push(ArtistPage, {
      id: result.artistId,
      name: result.artistName
    });
  }
}