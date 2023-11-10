import { Component } from '@angular/core';

@Component({//tranforma la clase a que sea un componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
//mi clase
export class AppComponent {
  public title:string = 'Hola a todos';

}
