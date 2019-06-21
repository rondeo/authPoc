import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { Account } from 'src/models/account';
import { accountType } from 'src/models/accountType';

const generateAccount = (count: number) => {
  const accountList = new Array<Account>();
  for (let i = 0; i < count; i++) {
    const acc = new Account();
    acc.accountId = i;
    acc.accountName = 'Account-' + i;
    (acc.accountType = accountType.personalChecking),
      (acc.systemRoute = '/salesforce/acct/1234' + i);
    accountList.push(acc);
    return accountList;
  }
};

@Component({
  template: `
    <div>
      <h1><img width="50" src="/assets/images/camera.png" /> Federated Event</h1>
      <div>
        <app-event-thumbnail [event]="event1"></app-event-thumbnail>
      </div>
    </div>
  `
})
export class EventsListComponent {
  event1 = {
    name: 'One Event',
    date: '01/01/2020',
    time: '9:00 am',
    price: 599,
    location: {
      address: '123 main street',
      city: 'Wilmington',
      zip: '28401'
    }
  };
  event2: User = {
    userId: 12345,
    firstName: 'John',
    lastName: 'Doe',
    emailAddress: 'xyz@nomail.com',
    accounts: generateAccount(3),
    streetAddress: '123 main street',
    city: 'Wilmington',
    zipCode: '28401',
    phoneNumber: '(555)-55-5555'
  };
}
