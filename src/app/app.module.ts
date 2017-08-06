import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { ContactusPage } from '../pages/contactus/contactus';
import { ArtistPage } from '../pages/artist/artist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ItunesProvider } from '../providers/itunes/itunes';

import { PreviewModal } from '../pages/search/preview';
import { LanguageSetting } from '../pages/settings/language';

import { ToSymbolPipe } from '../pipes/to-symbol/to-symbol';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    SettingsPage,
    PreviewModal,
    ContactusPage,
    ArtistPage,
    ToSymbolPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    SettingsPage,
    PreviewModal,
    ContactusPage,
    ArtistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    JsonpModule,
    ItunesProvider,
    LanguageSetting,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
