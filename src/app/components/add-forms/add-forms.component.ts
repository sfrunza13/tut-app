import { Component, EventEmitter, Output } from '@angular/core';
import { CardToAdd } from '../../Card';

@Component({
  selector: 'app-add-forms',
  templateUrl: './add-forms.component.html',
  styleUrls: ['./add-forms.component.css'],
})
export class AddFormsComponent {
  // The id should automatically be incremented
  // with a real backend.
  // id = 4;
  example!: string;
  name: string = 'Card Title';
  color: string = 'red';
  text: string = 'Default body text';

  @Output() addedNewCard: EventEmitter<CardToAdd> = new EventEmitter();

  onSubmit() {
    if (!this.name) {
      alert('Please enter a Name');
      return;
    }

    // const newCard:Card = {
    //   id:this.id,
    //   name: this.name,
    //   color: this.color,
    //   text: this.text
    // }

    const newCard = {
      name: this.name,
      color: this.color,
      text: this.text,
    };

    console.log(newCard);

    this.addedNewCard.emit(newCard);

    // this.id = this.id++
    this.name = '';
    this.text = '';
    this.color = '';
  }
}
