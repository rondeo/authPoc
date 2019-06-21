import { Account } from '../models/account';

export class User {
  userId: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber?: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  accounts: Array<Account>;
}
