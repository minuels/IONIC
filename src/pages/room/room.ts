import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NodePage } from '../node/node';
import { Observable } from 'rxjs/Observable';
import { Device } from '../../models/devices/device.model';
import { FirebaseService } from '../../services/firebase-service/firebase.service';


/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  devList$: Observable<Device[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private service: FirebaseService) {
      this.devList$ = this.service.getAll().snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  navNode() {
    this.navCtrl.push(NodePage);
  }

}
