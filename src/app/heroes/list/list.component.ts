import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[] = [
    'spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Wakanda',
  ]

  public deleHero?:string;

  removeLastHero():void{
    this.deleHero = this.heroNames.pop();


  }
}
