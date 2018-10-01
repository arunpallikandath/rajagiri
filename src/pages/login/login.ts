import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username = '';

  private password = '';

  private parents:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  private doLogin(){


    this.api.getAllParents().then((response:any) => {

      let parentId = ''
      this.parents = response.json().data;

      let validParent = this.parents.find(item => (item.phoneNo.substr(0, item.phoneNo.indexOf(',') == -1 ? item.phoneNo.length : item.phoneNo.indexOf(','))) === this.username);
      
      if(!validParent){

        let alert = this.alertCtrl.create({
          title: 'Login Error',
          subTitle: 'Invalid Username / password',
          buttons: ['OK']
        });
        alert.present();
      } else {

        this.navCtrl.setRoot(HomePage);
      }
      
     

    })

  }

}
