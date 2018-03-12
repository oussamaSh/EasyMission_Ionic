import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('role') role;
  @ViewChild('lastname') lastname;
  @ViewChild('firstname') firstname;
  @ViewChild('mail') mail;
  @ViewChild('username') username;
  @ViewChild('password') paswword;
  @ViewChild('confirmPassword') confirmPassword;
  @ViewChild('gender') gender;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    console.log(this.gender.value);
  }

}
