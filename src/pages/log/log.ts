import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegPage } from '../reg/reg';
import { MyTabPage } from '../my-tab/my-tab';
import { User } from '../../models/user/user';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 //

 @IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AngularFireAuth, private to: ToastController) {
  }

  //Navegar a la pagina de registro

  navReg() {
    this.navCtrl.push(RegPage)
  }

  //Iniciar sesion

  async log(user: User) {
    try{
      const result = await this.auth.auth.signInWithEmailAndPassword(user.email, user.pass);
      if(result){
        this.navCtrl.setRoot(MyTabPage);
      }
    }catch(e){
      console.log(e);
      this.user.email = '';
      this.user.pass = '';
      this.to.create({
        message: "El correo o contraseña son incorrectos",
        duration: 2000
      }).present();
    }
  }

}
