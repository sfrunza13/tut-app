import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonListing, Result } from 'src/app/PokemonListing';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<Result> = new MatTableDataSource<Result>([]);
  pokemonList: Result[] = [];
  displayedColumns: string[] = ['id', 'name', 'url'];
  filter = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonListings().subscribe((data: PokemonListing) => {
      this.pokemonList = data.results;
      this.dataSource.data = this.pokemonList;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterChange(toFilter: string) {
    this.filter = toFilter;
    this.dataSource.filter = this.filter;
  }
}
