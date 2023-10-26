import { Component } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


interface User{
  id? : number,
  firstName : string,
  lastName : string,
  contact : number,
  gender : string,
  emailAdderss : string,
  age : number,
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  userForm : FormGroup;
  user : Array<User> = [];
  
  constructor(private userService:UserService){

    this.user = this.userService.users;
    this.userForm = new FormGroup({
      "firstName" : new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      "lastName" :new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ]),
      "contact" : new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.pattern(/^\d+$/),
      ]),
      "gender" : new FormControl('',[
        Validators.required,
      ]),
      "emailAdderss" : new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.email,
      ]),
       "age" : new FormControl('',[
        Validators.required,
      ])
    });
  }
  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get contact() {
    return this.userForm.get('contact');
  }

  get gender() {
    return this.userForm.get('gender');
  }

  get emailAdderss() {
    return this.userForm.get('emailAdderss');
  }

  get age() {
    return this.userForm.get('age');
  }

  addUsersData(){
    if(this.userForm.valid)
    {
    this.userService.addUsers(this.userForm.value);
    this.userForm.reset();
    }
    else{
      alert("Form not valid")
    }
    
  }
  
  showMessage() {
    if(this.userForm.valid)
    {
    alert("User Details Saved.");
    }
    // else{
    //   alert("Failed to save user details")
    // }
}
}
