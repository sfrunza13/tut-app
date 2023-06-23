import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { CARDS } from '../mock-cards';
import { Card, CardToAdd } from '../Card';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl = 'http://localhost:5000/cards';

  constructor(private httpClient: HttpClient) {}

  // getCards(): Card[]{
  //   return CARDS
  // }

  getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.apiUrl);
  }

  getCard(id: number): Observable<Card> {
    return this.httpClient.get<Card>(`${this.apiUrl}/${id}`);
  }

  addCard(newCard: CardToAdd): Observable<Card> {
    return this.httpClient.post<Card>(this.apiUrl, newCard, httpOptions);
  }

  deleteCard(id: number): Observable<Card> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<Card>(url);
  }
}
