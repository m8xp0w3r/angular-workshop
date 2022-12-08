import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  entries:string[] = [];

  //constructor() { }
  addEntry(value: string) {
    this.entries.push(value);
  }

  getEntries(){
    return this.entries;
  }
}
