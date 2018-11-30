import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tab } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { LogPage } from '../pages/log/log';
import { RegPage } from '../pages/reg/reg';
import { MyTabPage } from '../pages/my-tab/my-tab';
import { RoomPage } from '../pages/room/room';
import { InfoPage } from '../pages/info/info';
import { ExitPage } from '../pages/exit/exit';
import { NodePage } from '../pages/node/node';
import { config } from './credentials';
import { FirebaseService } from '../services/firebase-service/firebase.service';


@NgModule({
  declarations: [
    MyApp,
    LogPage,
    RegPage,
    MyTabPage,
    RoomPage,
    InfoPage,
    ExitPage,
    NodePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LogPage,
    RegPage,
    MyTabPage,
    RoomPage,
    InfoPage,
    ExitPage,
    NodePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseService
  ]
})
export class AppModule {}
