import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '../../models/devices/device.model';
import { FirebaseService } from '../../services/firebase-service/firebase.service';
import { RoomPage } from '../room/room';

/**
 * Generated class for the NodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-node',
  templateUrl: 'node.html',
})
export class NodePage {

  dev: Device = {
    name: '',
    desc: '',
    status: 'off',
    value: 0,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private service: FirebaseService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NodePage');
  }

  addDev(device: Device) {
    this.service.addDev(device);
    this.navCtrl.push(RoomPage);
  }

}
