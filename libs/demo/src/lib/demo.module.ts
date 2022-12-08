import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { DemoDirective } from './demo.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DemoViewComponent, DemoDirective],
  exports: [DemoViewComponent],
})
export class DemoModule {}
