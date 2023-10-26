import { Injectable } from '@angular/core';

interface User{
  id : number,
  firstName : string,
  lastName : string,
  contact : number,
  gender : string,
  emailAdderss : string,
  age : number,
}

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  view: User = 
  {
    id : 1,
    firstName : "Avina",
    lastName : "Jain",
    contact : 9876543211,
    gender : 'FeMale',
    emailAdderss : "savina@gmail.com",
    age : 20,
  }


  constructor() { }
}
