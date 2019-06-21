import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav/navbar.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserDetailComponent } from './user-management/user-details.component';
import { UserLoginComponent } from './user-login/user-login.component';
// routing
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
// services
import { UserManagementService } from './shared/user-service';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    UserManagementComponent,
    UserDetailComponent,
    UserLoginComponent
  ],
  providers: [UserManagementService],
  bootstrap: [AppComponent, NavBarComponent]
})
export class AppModule {}
