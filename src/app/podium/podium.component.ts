import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-podium',
  imports: [],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css',
})
export class PodiumComponent {
  @Input() podium!: string[];
  @Output() rowUnMarked = new EventEmitter<boolean>();

  rowUnMark() {
    this.rowUnMarked.emit(true);
  }
}
