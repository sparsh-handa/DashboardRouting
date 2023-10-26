import { Component } from '@angular/core';
import { ViewService } from '../view.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

interface User {
  id?: number,
  firstName: string,
  lastName: string,
  contact: number,
  gender: string,
  emailAdderss: string,
  age: number,
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  viewId?: number;
  viewData: User = {
    firstName: '',
    lastName: '',
    contact: 0,
    gender: '',
    emailAdderss: '',
    age: 0
  }
  constructor(private activatedRoute: ActivatedRoute, private viewService: ViewService, private userServices: UserService) {
    // this.activatedRoute.params.subscribe((params) => {
    //   this.userData = this.userService.users.filter(
    //     (b) => b.id == params['Uid']
    //   );
    // });
    this.viewId = this.activatedRoute.snapshot.params['id'];
    this.viewData = this.userServices.users[this.viewId! - 1];

  }
}
