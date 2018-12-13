import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '../../models/devices/device.model';
import { FirebaseService } from '../../services/firebase-service/firebase.service';

/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {

  device: Device = {
    name: '',
    desc: '',
    status: '',
    value: null
  };

  d: Device;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: FirebaseService) {

  }

  ionViewDidLoad() {
    this.device = this.navParams.get('dev');
  }

  devOn() {
    this.d = this.device;
    this.d.status = 'on';
    this.service.updateDev(this.device.key, this.d);
  }

  devOff() {
    this.d = this.device;
    this.d.status = 'off';
    this.service.updateDev(this.device.key, this.d);
  }

}
