import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { DemoDirective } from './demo.directive';
import { DemoPipe } from './demo.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [DemoViewComponent, DemoDirective, DemoPipe],
  exports: [DemoViewComponent],
})
export class DemoModule {}
