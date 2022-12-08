import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { SecondViewComponent } from './second-view/second-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DemoViewComponent, SecondViewComponent],
  exports: [DemoViewComponent, SecondViewComponent],
})
export class DemoModule {}
