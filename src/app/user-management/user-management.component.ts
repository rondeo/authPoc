import { Component } from '@angular/core';
import { UserManagementService } from '../shared/user-service';
import { User } from '../../models/user';

@Component({
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent {
  constructor(private userService: UserManagementService) {}
  userList: Array<User>;

  ngOnInit() {
    this.userList = this.userService.getUsers();
  }
}
