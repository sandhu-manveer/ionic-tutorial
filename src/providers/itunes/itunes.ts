import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams} from '@angular/http';
import { LanguageSetting } from '../../pages/settings/language';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ItunesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ItunesProvider {
  data: any;

  constructor(public jsonp: Jsonp, private setting: LanguageSetting) {
    this.jsonp = jsonp;
    this.data = null;
  }

  search(keyword) {
    var params = new URLSearchParams(
      'callback=JSONP_CALLBACK'
    );
    params.set('term', keyword);
    return this.jsonp.request(
      'https://itunes.apple.com/search',
      {
        search: params
      }
    ).toPromise()
      .then((response) => response.json().results);
  }

  loadAlbums(id) {
    let params = new URLSearchParams(
      'callback=JSONP_CALLBACK&entity=album'
    );
    params.set('id', id);
    params.set('country', this.setting.country.code);
    return this.jsonp.request(
      'https://itunes.apple.com/lookup',
      {
        search: params
      }
    ).toPromise()
      .then((response) => response.json().results)
      .then((results) => results.filter((item) => item.collectionType === 'Album'));
  }
}
