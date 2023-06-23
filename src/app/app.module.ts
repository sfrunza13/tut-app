import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { CardDeckComponent } from './components/card-deck/card-deck.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AddFormsComponent } from './components/add-forms/add-forms.component';
import { AboutComponent } from './components/about/about.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: 'card/:id',
    component: CardDetailComponent,
  },
  {
    path: 'pokemon',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon-detail/:id',
    component: PokemonDetailComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    CardDeckComponent,
    CheckboxComponent,
    AddFormsComponent,
    AboutComponent,
    CardsComponent,
    CardDetailComponent,
    PokemonListComponent,
    PokemonDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
