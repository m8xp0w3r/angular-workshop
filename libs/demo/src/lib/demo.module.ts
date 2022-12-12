import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { DemoDirective } from './demo.directive';
import { DemoPipe } from './demo.pipe';
import { EntryRowComponent } from './entry-row/entry-row.component';
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  imports: [CommonModule, MatInputModule, MatCheckboxModule, MatButtonModule, MatTableModule, ReactiveFormsModule, MatSortModule],
  declarations: [DemoViewComponent, DemoDirective, DemoPipe, EntryRowComponent],
  exports: [DemoViewComponent],
})
export class DemoModule {}
