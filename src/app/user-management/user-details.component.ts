import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../shared/user-service';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './user-details.component.html'
})
export class UserDetailComponent {
  constructor(private userService: UserManagementService, private route: ActivatedRoute) {}

  userList: Array<User>;
  userDetail: User;
  id: number;

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.userList = this.userService.getUsers();
    this.userDetail = this.userService.getUserDetails(this.userList, this.id);
  }
}
