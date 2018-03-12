import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FieldErrorDisplayPage } from './field-error-display';

@NgModule({
  declarations: [
    FieldErrorDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(FieldErrorDisplayPage),
  ],
})
export class FieldErrorDisplayPageModule {}
