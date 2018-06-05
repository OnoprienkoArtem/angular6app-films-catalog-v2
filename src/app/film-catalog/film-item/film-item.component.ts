import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  items: object[] = [];

  constructor(public filmsService: FilmService) { }

  @Output() onChanged = new EventEmitter(); 

  // buttonStatus: boolean = false;

  change(increased: any) {
    this.onChanged.emit(increased);
    
    // this.buttonStatus = true;
  }
  
  ngOnInit() {
    this.items = this.filmsService.getData();
  }

}
