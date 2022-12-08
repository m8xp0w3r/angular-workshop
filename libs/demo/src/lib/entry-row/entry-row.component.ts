import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: '[diloc-entry-row]',
  templateUrl: './entry-row.component.html',
  styleUrls: ['./entry-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryRowComponent {
  @Input() tableSize?: string|undefined;
  @Input() entry?: string|undefined;
}
