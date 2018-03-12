import { FreelanceProposal } from './../../models/FreelanceModels/FreelanceProposal';
import { FreelanceJob } from './../../models/FreelanceModels/FreelanceJob';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FreelanceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FreelanceProvider {
  private URL="http://192.168.43.80:18080/EasyMission-web/rest/freelance";
  private URLGetById="http://192.168.43.80:18080/EasyMission-web/rest/freelance/jobById";
  private URLSubmitProposal="http://192.168.43.80:18080/EasyMission-web/rest/freelance/proposalIonic";
  

  constructor(public http: Http) {
    console.log('Hello FreelanceProvider Provider');
  }

  getAll(): Observable<FreelanceJob[]> {
    return this.http.get(this.URL)
      .map(res => <FreelanceJob[]>res.json());
  }

  FreelanceJobDetails(id: number): Observable<FreelanceJob> {
    return this.http.get(`${this.URLGetById}/${id}`)
      .map(res => <FreelanceJob>(res.json()))
  }

  submitProposal(proposal:FreelanceProposal){
    /*  const body = JSON.stringify(proposal.freelanceJob.id=idd);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });*/
      
      return this.http.post(this.URLSubmitProposal,proposal).map(resp=>resp.json());
     }

     private jwt() {
      // create authorization header with jwt token
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers:headers });
      }
  }
}
