import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card, CardToAdd } from '../../Card';
// import { CARDS } from '../../mock-cards';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.css'],
})
export class CardDeckComponent implements OnInit {
  // cards:Card[] = CARDS;
  cards!: Card[];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getCards().subscribe((retrievedCards) => {
      this.cards = retrievedCards;
    });
  }

  // onDelete(id:number){
  //   console.log(id)
  //   this.cards = this.cards.filter(card => card.id !== id)
  // }

  onDelete(id: number) {
    this.cardService.deleteCard(id).subscribe(() => {
      this.cards = this.cards.filter((card) => card.id !== id);
    });
  }

  // addCard(newCard:Card){
  //   this.cards.push(newCard)
  // }

  addCard(newCard: CardToAdd) {
    this.cardService.addCard(newCard).subscribe((newCard) => {
      this.cards.push(newCard);
    });
  }
}
