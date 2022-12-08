import { Component } from '@angular/core';
import { DemoService } from "../demo.service";

@Component({
  selector: 'diloc-demo-view',
  templateUrl: './demo-view.component.html',
  styleUrls: ['./demo-view.component.scss'],
})
export class DemoViewComponent {
  public value: string;
  constructor(private demoService: DemoService) {
    this.value = demoService.value;
  }
}
