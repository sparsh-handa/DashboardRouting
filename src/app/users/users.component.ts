import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  // userData:Array<any> = []
  // constructor(public userService: UserService){     //called Injecting
  //   this.userData = this.userService.userList;

  // }

  // addUser(user:any){
  //   this.userService.addUser(user)
  // }

  userData:Array<User> = []
  constructor(  private activatedRoute: ActivatedRoute,private userService: UserService) {
    // this.activatedRoute.params.subscribe((params) => {
    //   this.userData = this.userService.users.filter(
    //     (b) => b.id == params['Uid']
    //   );
    // });
    this.userData = this.userService.users;
   
  }


}
