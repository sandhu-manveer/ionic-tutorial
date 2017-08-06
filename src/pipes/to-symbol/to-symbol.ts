import { Pipe, PipeTransform } from '@angular/core';
import { LanguageSetting } from '../../pages/settings/language';

/**
 * Generated class for the ToSymbolPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'toSymbol',
})
export class ToSymbolPipe implements PipeTransform {

  constructor(private settings: LanguageSetting) {}
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return this.settings.country.currency || value;
  }
}
