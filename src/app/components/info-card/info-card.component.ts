import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../Card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent implements OnInit {
  @Input() card: Card | undefined;
  @Input() cardName: string = 'Default';
  @Input() backgroundColor: string = 'lightblue';
  // This event currently only emits number for id but could emit entire Card object
  @Output() delete: EventEmitter<number> = new EventEmitter();
  desc: string = 'Anonymous Card';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.card) {
      this.cardName = this.card.name;
      this.backgroundColor = this.card.color;
      this.desc = this.card.text;
    } else {
      this.desc = `${this.cardName} of color: ${this.backgroundColor}`;
    }
  }

  emitDelete() {
    this.delete.emit(this.card?.id);
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
