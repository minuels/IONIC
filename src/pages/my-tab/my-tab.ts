import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RoomPage } from '../room/room';
import { InfoPage } from '../info/info';
import { ExitPage } from '../exit/exit';

/**
 * Generated class for the MyTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-tab',
  templateUrl: 'my-tab.html'
})
export class MyTabPage {

  roomRoot = RoomPage
  infoRoot = InfoPage
  exitRoot = ExitPage


  constructor(public navCtrl: NavController) {}

}
