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
    { value: 'ASC', viewValue: 'По алфавиту: A-Z' },
    { value: 'DESC', viewValue: 'По алфавиту: Z-A' }
  ];
  show = true;

  private filteredFilms: Object[];
  private filmsOnPage: number = 6;
  
  constructor(public filmsService: FilmService) { }

  addFilmObj(filmObj) {    
    this.filmFiltered = this.allFilms.filter(item => item.isFavorite);   
    this.favorites = this.filmFiltered.length; 
  } 

  sortList(elem, option?) {
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

