import { Component, Input } from '@angular/core';

@Component({
  selector: 'diloc-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.scss'],
})
export class SecondViewComponent {
  @Input() value?: string;
}
