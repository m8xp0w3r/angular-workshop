import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbCollapse } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [CommonModule, NgbCollapse, RouterModule],
	declarations: [NavbarComponent],
	exports: [NavbarComponent],
})
export class HeaderModule {
}
