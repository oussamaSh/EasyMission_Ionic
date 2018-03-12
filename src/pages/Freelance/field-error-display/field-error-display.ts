import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FieldErrorDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-field-error-display',
  templateUrl: 'field-error-display.html',
})
export class FieldErrorDisplayPage {

  
  @Input() errorMsg: string;
  @Input() displayError: boolean;

}
