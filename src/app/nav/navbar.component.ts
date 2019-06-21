import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styles: [
    `
      img {
        width: 200px;
        padding-right: 20px;
      }
      .navbar-brand {
        float: right;
      }
      .active {
        font-weight: 100;
        border-bottom-width: 5px;
        border-bottom-color: #a71930;
        border-bottom-style: solid;
        padding-bottom: 12px;
        margin-bottom: -8px;
      }
      a,
      a:hover {
        cursor: pointer;
      }
    `
  ]
})
export class NavBarComponent {
  constructor() {}
}
