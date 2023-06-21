import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, TypeColors } from 'src/app/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  id: number | null = null;
  pokemon: Pokemon | null = null;

  colors = TypeColors;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {

      this.id = params['id']

      if (this.id) {

        this.pokemonService.getPokemon(this.id).subscribe((data) => {
          console.log(data)
          this.pokemon = {
            id: data.id,
            name: data.name,
            sprite: data.sprites.front_default,
            stats: [],
            types: []
          }

          data.stats.forEach((stat: any) => {
            this.pokemon?.stats.push({ name: stat.stat.name, baseStat: stat.base_stat })
          });

          data.types.forEach((type: any) => {
            this.pokemon?.types.push(
              {
                name: type.type.name,
                slot: type.slot
              }
            )
          });
        })
      }
    })
  }

}
