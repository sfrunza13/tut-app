import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/Card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  id!: number;
  card!: Card;
  loading: boolean = true;
  error: boolean = false;

  constructor(private cardService: CardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.cardService.getCard(this.id).subscribe({
        next: (card: Card) => {
          this.card = card;
          this.loading = false;
        },
        error: (error) => {
          this.error = true;
          console.log(error);
          this.loading = false;
        },
      });
    });
  }
}
