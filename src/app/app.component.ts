import { Component } from '@angular/core';
import { ResultsTableComponent } from './results-table/results-table.component';
import { PodiumComponent } from './podium/podium.component';
import { Result } from '../results';
import { results } from '../results';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ResultsTableComponent, PodiumComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'F1';
  results: Result[] = [...results];
  protected markedRowId?: number;

  // rowMarked(rowId: number) {
  //   this.markedRowId = rowId;
  // }

  rowUnMarked() {
    this.markedRowId = undefined;
  }
}
