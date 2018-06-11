import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { FilmItemComponent } from '../film-item/film-item.component';
@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  items: object[] = [];  

  constructor(public filmsService: FilmService) { }

  favorites: number = 0;

  allFilms;
  selectedValue: string;

  sortOptions = [
    { value: 'ASC', viewValue: 'По алфавиту: A-Z' },
    { value: 'DESC', viewValue: 'По алфавиту: Z-A' }
  ];

  onChanged(increased: any) {
    if(increased == true) {
      this.favorites++;
    }  
  }

  ngOnInit() {
    this.allFilms = this.filmsService.getData();
      
    } 

  sortedList(elem, option?) {
    if (option === 'DESC') {
      return elem.sort(this.sortByName).reverse();
    }
    return elem.sort(this.sortByName);
  }
  sortByName(a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  }
  }

