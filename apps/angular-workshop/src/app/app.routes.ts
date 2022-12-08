import { Route } from '@angular/router';
import { DemoViewComponent, SecondViewComponent } from "@angular-workshop/demo";

export const appRoutes: Route[] = [
	{
		path: "first-view",
		component: DemoViewComponent
	},
	{
		path: "second-view",
		component: SecondViewComponent
	},
	{
		path: '',
		redirectTo: "demo",
		pathMatch: "full"
	}
];
