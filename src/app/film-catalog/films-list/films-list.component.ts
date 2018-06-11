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

  onChanged(increased: any) {
    if(increased == true) {
      this.favorites++;
    }  
  }

  ngOnInit() {
    this.items = this.filmsService.getData();
     
      
    } 
  }

