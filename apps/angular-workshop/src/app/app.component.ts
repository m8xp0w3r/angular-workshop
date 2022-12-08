import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'diloc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-workshop';

	constructor(private router: Router) {
	}

	navigate(path: string) {
		void this.router.navigate([path]);
	}
}
