import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams} from '@angular/http';
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

  constructor(public jsonp: Jsonp) {
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
}
