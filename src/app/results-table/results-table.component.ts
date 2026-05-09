import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe, UpperCasePipe, NgClass } from '@angular/common';
import { Result } from '../../results';

@Component({
  selector: 'app-results-table',
  imports: [DatePipe, UpperCasePipe, NgClass],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css',
})
export class ResultsTableComponent {
  @Input() results!: Result[];
  @Input() markedRowId?: number;
  @Output() markedRowIdChange = new EventEmitter<number>();

  mark(rowId: number) {
    this.markedRowId = rowId;
    console.log(this.markedRowId);
    this.markedRowIdChange.emit(this.markedRowId);
  }
}
