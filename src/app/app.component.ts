import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
    <app-nav-bar></app-nav-bar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'Sample Auth Site';
}
