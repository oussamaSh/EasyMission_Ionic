export class FreelanceJob {
    
      constructor(
  
          public id? : number,
          public title? : string,
          public description? : string,
          public projectHours? : number,
          public projectLength? : string,
          public date? : Date,
          public salary? : Float32Array,
          public freelancerLevel? : string,
          public freelancersNumber? : number,
          public category? : string,
          public isOpen? : boolean,
          public capacity? : number,
          public user_id? : number,
          public user? : object
          
      ) { }
  }