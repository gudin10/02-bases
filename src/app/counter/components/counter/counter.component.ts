import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-counter',
  template: `

    <p>Counter : {{counter}}</p>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent{

  public counter:number = 10;

  increaseBy(value:number):void{//metodo

    this.counter +=value;
  }

  resetCounter():void{
    this.counter=10;
  }

}
