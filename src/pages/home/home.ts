import { LoginPage } from './../login/login';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private notifications:any = [];
  private schoolNotifications:any = [];
  private schoolExpand:boolean = false;

  constructor(public navCtrl: NavController, private api: ApiProvider) {

    api.getAllMessages().then((response:any) => {


      let parentId = ''
      this.notifications = response.json().data;

      this.schoolNotifications = this.notifications.filter((item) => item.sendToType === 'School');
      this.schoolNotifications = this.schoolNotifications.map(item => {item.expand = false; return item;})
      
      console.log(this.notifications);

    })
  }

  private toggleSchool(){

    this.schoolExpand = !this.schoolExpand;
  }

  private toggleSchoolItem(message){

    let x = this.schoolNotifications.findIndex(item => item._id === message._id)
    if(x !== -1){
      this.schoolNotifications[x].expand = !this.schoolNotifications[x].expand
    }

  }

  private logout(){

    this.navCtrl.setRoot(LoginPage);
  }


}
