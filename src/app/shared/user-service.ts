import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Account } from '../../models/account';
import { accountType } from '../../models/accountType';

@Injectable()
export class UserManagementService {
  getUsers() {
    const USERS = new Array<User>();
    for (let i = 0; i < 5; i++) {
      const user = new User();
      const ACCOUNTS = new Array<Account>();
      user.accounts = [];
      user.firstName = 'John';
      user.lastName = 'Smith-' + i;
      user.phoneNumber = '111-111-111' + i;
      user.emailAddress = 'jsmith' + i + '@nomail.com';
      user.userId = i;
      user.streetAddress = '123' + i + 'Main street';
      user.city = 'Wilmington';
      user.state = 'NC';
      user.zipCode = '2840' + i;
      for (let a = 0; a < 3; a++) {
        const acct = new Account();
        acct.accountId = a;
        acct.accountName = 'Customer Account-' + a;
        acct.accountType = accountType.commercialChecking + '-' + a;
        acct.systemRoute = 'some route to system-' + a;
        ACCOUNTS.push(acct);
      }
      user.accounts = ACCOUNTS;
      USERS.push(user);
    }
    return USERS;
  }

  getUserDetails(users: Array<User>, id: number) {
    return users.find(user => user.userId === id);
  }
}
