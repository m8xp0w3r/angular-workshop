import {Component, Input} from '@angular/core';
import {DemoService} from "../demo.service";

@Component({
  selector: 'diloc-demo-view',
  templateUrl: './demo-view.component.html',
  styleUrls: ['./demo-view.component.scss'],
})
export class DemoViewComponent {
  @Input() listItems: string[] = [];

  entries:string[]|undefined;
  constructor(private demoService : DemoService) {
  }

  clicked() {
    this.demoService.addEntry("test");
    this.entries = this.demoService.getEntries();
  }

}
