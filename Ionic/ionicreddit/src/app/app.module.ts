import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RedditPage } from '../pages/reddits/reddit';
import { SettingPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/details/details';
import { AboutPage } from '../pages/about/about';
import { RedditService } from './service/reddit.service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RedditPage,
    SettingPage,
    DetailPage,
    TabsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    RedditPage,
    SettingPage,
    DetailPage,
    AboutPage
  ],
  providers: [
    RedditService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
