import { FreelanceJob } from './../../../models/FreelanceModels/FreelanceJob';
import { FreelanceJobDetailsPage } from './../freelance-job-details/freelance-job-details';
import { FreelanceProvider } from './../../../providers/freelance/freelance';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeFreelancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-freelance',
  templateUrl: 'home-freelance.html',
})
export class HomeFreelancePage {
  searchQuery: string = '';
  freelanceJobs : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private freelanceProvider: FreelanceProvider) {  
    this.freelanceProvider.getAll().subscribe(
      result => {
        this.freelanceJobs = result ;
       
      });
  }
 
  ionViewDidLoad() {
    
  }

  goToJobDetails(wording: string) {
    this.navCtrl.push(FreelanceJobDetailsPage, {wording});
  }

  getItems(ev: any,freelanceJobs:any) {
    
    // Reset items back to all of the items
    this.ionViewDidLoad();
    
        // set val to the value of the searchbar
        let val = ev.target.value;
      
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.freelanceJobs = this.freelanceJobs.filter((item) => {
          return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
      else {
        this.freelanceProvider.getAll().subscribe(
          result => {
            this.freelanceJobs = result ;
           
          });
      }
      
      
    }
 
}
