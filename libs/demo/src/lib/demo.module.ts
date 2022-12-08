import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { DemoDirective } from './demo.directive';
import { DemoPipe } from './demo.pipe';
import { EntryRowComponent } from './entry-row/entry-row.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DemoViewComponent, DemoDirective, DemoPipe, EntryRowComponent],
  exports: [DemoViewComponent],
})
export class DemoModule {}
