import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserDetailComponent } from './user-management/user-details.component';
import { UserLoginComponent } from './user-login/user-login.component';

export const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'usermanagement', component: UserManagementComponent },
  { path: 'userdetails/:id', component: UserDetailComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];
