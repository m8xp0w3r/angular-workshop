import {
  AfterViewInit,
  Component,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {DemoService} from "../demo.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../../../../firebase/src/lib/firebase.service";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MatSort} from "@angular/material/sort";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {Subject} from "rxjs";

interface Validator<T extends FormControl> {
  (c:T): {[error: string]:any};
}

export interface Player {
  id: number;
  name: string;
  progress: number;
  color: string;
}



@Component({
  selector: 'diloc-demo-view',
  templateUrl: './demo-view.component.html',
  styleUrls: ['./demo-view.component.scss'],
})



export class DemoViewComponent implements AfterViewInit {
  @Input() listItems: string[] = [];

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource = new MatTableDataSource();

  newPlayerForm = new FormGroup({
    name: new FormControl(),
    color: new FormControl()
  });

  entries: string[] | undefined;

  subject = new Subject<Player>();

  currentColor = "";

  constructor(private demoService: DemoService, private fireBaseService: FirebaseService) {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

    this.subject.asObservable().subscribe(next =>
    {
      this.dataSource.data = [...this.dataSource.data, next];
    });
  }

  clicked() {
    this.demoService.addEntry("test");
    this.entries = this.demoService.getEntries();
  }

  addEntry() {
    const entry = {
      id: this.dataSource.data.length + 1,
      name: this.newPlayerForm.controls.name.value,
      progress: Math.round(Math.random() * 100),
      color: this.currentColor
    };

    this.subject.next(entry);
  }

  onColorChange(event: MatCheckboxChange)
  {
    if (event.checked)
    {
      this.currentColor = event.source.value;
    }
  }
}
