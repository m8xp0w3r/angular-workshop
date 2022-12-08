import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { NavbarItem } from "./navbar-item";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navItems$ = new BehaviorSubject<NavbarItem[]>([
    {
      name: "First View",
      path: "/first-view"
    },
    {
      name: "Second View",
      path: "/second-view"
    }
  ]);
  public navbarItems$ = this.navItems$.asObservable();
  constructor() { }
}
