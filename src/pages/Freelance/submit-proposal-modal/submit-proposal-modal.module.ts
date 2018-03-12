import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmitProposalModalPage } from './submit-proposal-modal';

@NgModule({
  declarations: [
    SubmitProposalModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SubmitProposalModalPage),
  ],
})
export class SubmitProposalModalPageModule {}
