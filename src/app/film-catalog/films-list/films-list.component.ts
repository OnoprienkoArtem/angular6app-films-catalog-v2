import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
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
    increased == true ? this.favorites++ : this.favorites--;
  }

  ngOnInit() {
    // this.items = this.filmsService.getData();
    // console.log(this.items);
    // for(let item of this.items) {
    //   console.log(item.name.charAt(0)); 
      
      
    } 
  }

}
