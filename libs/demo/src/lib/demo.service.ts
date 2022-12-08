import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DemoService {

	public value = "Hallo Welt";

	constructor() {
	}
}
