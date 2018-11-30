import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user/user';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the RegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg',
  templateUrl: 'reg.html',
})
export class RegPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AngularFireAuth, private to: ToastController) {
  }

  //Navegar de vuelta a la pagina de inicio de sesion

  navData() {
    this.navCtrl.pop()
  }

  //Funcion para registar usuario

  async registrar(user: User) {

      try {
        const result = await this.auth.auth.createUserWithEmailAndPassword
        (user.email, user.pass);
        console.log(result);
        this.user.email = '';
        this.user.pass = '';
        this.to.create({
          message: "Usuario creado con exito",
          duration: 2000
        }).present();
      } catch(e) {
        console.log(e);
        this.user.email = '';
        this.user.pass = '';
        this.to.create({
          message: "Error al crear usuario",
          duration: 2000
        }).present();
      }
  }

}

