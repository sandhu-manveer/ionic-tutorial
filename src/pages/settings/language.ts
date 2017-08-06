import {Injectable} from '@angular/core';

@Injectable()
export class LanguageSetting {
 country: any;
  countries = [
    {
      name: 'United States',
      local_name: 'USA',
      code: 'us',
      currency: '$'
    },
    {
      name: 'United Kingdom',
      code: 'gb',
      local_name: 'The UK',
      currency: '£'
    },
    {
      name: 'Russia',
      local_name: 'Россия',
      code: 'ru'
    }
  ];

  constructor() {
    this.country = this.countries[0];
  }
}
