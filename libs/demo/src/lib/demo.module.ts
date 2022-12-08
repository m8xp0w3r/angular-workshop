import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoViewComponent } from './demo-view/demo-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DemoViewComponent],
  exports: [DemoViewComponent],
})
export class DemoModule {}
