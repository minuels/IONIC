import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LogPage } from '../log/log';


/**
 * Generated class for the ExitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exit',
  templateUrl: 'exit.html',
})
export class ExitPage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  navLog() {
    this.app.getRootNav().setRoot(LogPage);

  }

}
