import { RegisterPage } from '../User/register/register';
import { LoginPage } from '../User/login/login';
import { NavController, AlertController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  @ViewChild('username') username;
  @ViewChild('password') password;
  constructor(public navCtrl:NavController, public alertCtrl:AlertController) {

  }

  login(){
    this.navCtrl.push(LoginPage);

  }

  register(){
    this.navCtrl.push(RegisterPage);
    
  }
}
