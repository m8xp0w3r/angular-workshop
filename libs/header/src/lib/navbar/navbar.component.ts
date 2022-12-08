import { Component } from '@angular/core';
import { NavbarService } from "../navbar.service";

@Component({
  selector: 'diloc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isMenuCollapsed = true;
  constructor(public navbarService: NavbarService) {
  }
}
