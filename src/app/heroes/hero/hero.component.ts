import { Component } from '@angular/core';

@Component({//Simple clase con un decorador
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name:string = 'Ironman';
  public age:number = 23;

  get capitalizedName():string{
    return this.name.toUpperCase();

  }

  getHeroDescription():string{

    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'SpiderMan';
  }

  chageAge():void{
    this.age = 31;
  }

  resetform():void{
    this.name = 'Ironman';
    this.age = 23;
    //document.querySelector('h1')!.innerHTML= '<h1>Desde Angular<h1/>';
  }


}
