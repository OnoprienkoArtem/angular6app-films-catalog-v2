import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit { 
  @Input() item; 
  @Output() updateCounter = new EventEmitter<any>();
  @Output() reduceCounter = new EventEmitter<any>();

  isFavor;
  isPressed = false;

  constructor() { }
  
  addToFavorites(filmId) {
    this.item.isFavorite = !this.item.isFavorite;
    this.updateCounter.emit(filmId);
    this.isPressed = !this.isPressed; 
  }
  
  ngOnInit() {
   
  }

}
