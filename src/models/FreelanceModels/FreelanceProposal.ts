import { FreelanceJob } from './FreelanceJob';
export class FreelanceProposal {
    
      constructor(
  
          public id? : number,
          public details? : string,
          public coverLetter? : string,
          public state? : string,
          public freelancerBudget? : Float32Array,
          public idFreelanceJob? : number,
          public freelanceJob? : FreelanceJob,
          public user? : object,
          public file?: string
          
      ) { }
  }