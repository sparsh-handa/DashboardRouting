import { Injectable } from '@angular/core';

interface User{
  id? : number,
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
export class UserService {

  users : Array<User> = [
    {
      id : 1,
      firstName : "Avina",
      lastName : "Jain",
      contact : 9876543210,
      gender : 'Female',
      emailAdderss : "avina@gmail.com",
      age : 20,
    }
  ]
  constructor() { }
  addUsers(newUser : User){
    newUser.id = this.users.length + 1;
    this.users.push(newUser);
   }
}
