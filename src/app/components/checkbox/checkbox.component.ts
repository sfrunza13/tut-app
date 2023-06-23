import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  @Input() hide: boolean = false;
  @Output() hideChange = new EventEmitter<boolean>();

  hideEmit() {
    this.hideChange.emit(!this.hide);
  }
}
