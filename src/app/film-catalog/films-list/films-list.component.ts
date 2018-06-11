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
  show: boolean = true;


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

  filmName: string;
  changInput(e) {
    // this.filmName = this.allFilms.filter(item => item.name);
    // console.log(this.allFilms[1].name);

    for (let filmName of this.allFilms) {
      if (filmName.name === e.target.value) {

        filmName.name;
          console.log(filmName.name); 
      }

    }

    console.dir(e.target.value);
  }

  visible() {
    console.log(this.allFilms.filter(item => item));
  }


  ngOnInit() {
    this.allFilms = this.filmsService.getData(); 
    this.filmFiltered = this.allFilms.filter(item => item.isFavorite);
    this.favorites = this.filmFiltered.length;  

    console.log(this.allFilms.length);    
  }
}

