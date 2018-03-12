import { SubmitProposalModalPage } from './../submit-proposal-modal/submit-proposal-modal';
import { FreelanceJobDetailsPageModule } from './freelance-job-details.module';
import { User } from './../../../models/UserModels/user';
import { FreelanceProposal } from './../../../models/FreelanceModels/FreelanceProposal';
import { FreelanceProvider } from './../../../providers/freelance/freelance';
import { FreelanceJob } from './../../../models/FreelanceModels/FreelanceJob';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';

/**
 * Generated class for the FreelanceJobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-freelance-job-details',
  templateUrl: 'freelance-job-details.html',

})
export class FreelanceJobDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private freelanceProvider: FreelanceProvider,public modalCtrl: ModalController ) {  
     
  }
  id:number;
  freelanceJob : FreelanceJob;
  freelanceProposal:FreelanceProposal;


  openModal(wording: string) {
    
        let modal = this.modalCtrl.create(SubmitProposalModalPage, {wording});
        modal.present();
      }

  ionViewDidLoad() {
    this.id = this.navParams.get('wording');
    this.freelanceProvider.FreelanceJobDetails(this.id).subscribe(res => {
      this.freelanceJob = res;
      console.log(this.freelanceJob);
  });
  }
/*
 
  formSubmitProposal = new FormGroup({
    coverLetter : new FormControl('',[Validators.required,Validators.maxLength(500)]),
   
    freelancerBudget : new FormControl('',[Validators.required,Validators.pattern('[\-\+]?^[1-9][0-9]*(\.[0-9]+)?')]),
    paid : new FormControl()
    
    
  });

  addProposal(formSubmitProposal:FormGroup){
    let id=  this.navParams.get('wording');
     
      let freelanceProposal= new FreelanceProposal;
      let freelanceJob = new FreelanceJob;
      let user = new User;
      freelanceJob.id = id;
      user.id=5;//hedhi tetbadel
      freelanceProposal.coverLetter=formSubmitProposal.value.coverLetter;
      freelanceProposal.freelancerBudget=formSubmitProposal.value.freelancerBudget;
      console.log(freelanceJob.id);
      console.log(user.id);
      freelanceProposal.freelanceJob  = freelanceJob;
      freelanceProposal.user = user;
     
      this.freelanceProvider.submitProposal(freelanceProposal).subscribe(createdProposal => {
      
        swal(
          'Proposal submited successfully!',
          'Success',
          'success'
        )
       },
       error => {
        
        swal(
          'Oops...',
          error.text(),
          'error'
        )
           console.log(error);
      
    })
 
       //this.router.navigate(['/myPostedJobs']);
      }

      get coverLetter(){
        return this.formSubmitProposal.get('coverLetter');
      }

      get freelancerBudget(){
        return this.formSubmitProposal.get('freelancerBudget');
      }

      get paid(){
        return this.formSubmitProposal.get('paid');
      }

      isFieldValid(field: string) {
        return !this.formSubmitProposal.get(field).valid && this.formSubmitProposal.get(field).touched;
      }
      
      displayFieldCss(field: string) {
        return {
          'has-error': this.isFieldValid(field),
          'has-feedback': this.isFieldValid(field)
        };
      }

      feesClick(){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "assets/js/freelanceFees.js";
        document.body.appendChild(script);
      }*/

}
