import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { DemoService } from "../demo.service";
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from "../../../../firebase/src/lib/firebase.service";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

interface Validator<T extends FormControl> {
	(c: T): { [error: string]: any };
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


export class DemoViewComponent implements OnInit, AfterViewInit {
	@Input() listItems: string[] = [];

	@ViewChild(MatSort) sort!: MatSort;

	displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
	dataSource = new MatTableDataSource();

	newPlayerForm = new FormGroup({
		name: new FormControl(),
		color: new FormControl()
	});

	currentColor = "";

	constructor(private demoService: DemoService, private fireBaseService: FirebaseService) {
	}

	ngOnInit(): void {
		this.fireBaseService.getCollection("nils").subscribe(next => {
			this.dataSource.data = next;
		});
	}

	ngAfterViewInit() {
		this.dataSource.sort = this.sort;

	}

	addEntry() {
		const entry = {
			id: this.dataSource.data.length + 1,
			name: this.newPlayerForm.controls.name.value,
			progress: Math.round(Math.random() * 100),
			color: this.currentColor
		};
		void this.fireBaseService.addItem("nils", entry);
	}

	onColorChange(event: MatCheckboxChange) {
		if (event.checked) {
			this.currentColor = event.source.value;
		}
	}
}
