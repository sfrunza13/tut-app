import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonListing } from '../PokemonListing';
import { Observable } from 'rxjs';
import { Pokemon } from '../Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/'

  constructor(private httpClient:HttpClient) { }

  getPokemonListings():Observable<PokemonListing>{
    return this.httpClient.get<PokemonListing>(`${this.apiUrl}pokemon?limit=100000&offset=0`)
  }

  getPokemon(id:number):Observable<any>{
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }

}
