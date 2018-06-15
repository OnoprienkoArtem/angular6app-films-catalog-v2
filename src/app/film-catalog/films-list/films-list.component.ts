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
  filmFiltered: object[];
  favorites: number = 0;
  allFilms;
  selectedValue: string;

  sortOptions = [
    { value: 'default', viewValue: 'По умолчанию' },
    { value: 'ASC', viewValue: 'По алфавиту: A-Z' },
    { value: 'DESC', viewValue: 'По алфавиту: Z-A' }
  ];
  show = true;

  private filteredFilms: Object[];
  private filmsOnPage: number = 3;

  doSort(order: string) {
    (order === 'default' || order === '') ?
      (this.filteredFilms.sort(this.compareValues('id', order)), this.selectedValue = '') :
      this.filteredFilms.sort(this.compareValues('name', order));
  }

  compareValues(key, order = 'ASC') {
    return (a, b) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) { return 0; }
      const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) { comparison = 1; }
      else if (varA < varB) { comparison = -1; }
      return ((order === 'DESC') ? (comparison * -1) : comparison);
    };
  }

 
  constructor(public filmsService: FilmService) { }

  addFilmObj(filmObj) {    
    this.filmFiltered = this.allFilms.filter(item => item.isFavorite);   
    this.favorites = this.filmFiltered.length; 
  } 


  loadFilms(cnt: number = 3) {
    this.filmsOnPage += cnt;
  }

  get Films() {
    return this.filteredFilms.slice(0, this.filmsOnPage)
  }


  changInput(e) {  
    this.filmFiltered = this.allFilms.filter(item => {
      if (item.name.toLowerCase() === e.target.value.toLowerCase()) {       
        console.log(item.name);
      }  
    });    
  }


  ngOnInit() {
    this.allFilms = this.filmsService.getData();   

    this.items = this.filteredFilms = this.filmsService.getData(); 

    this.filmFiltered = this.allFilms.filter(item => item.isFavorite);
    this.favorites = this.filmFiltered.length;      
  }


}

