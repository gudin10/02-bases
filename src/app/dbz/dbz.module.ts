import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    CharacterComponent
  ],
  exports:[
    MainPageComponent,
  ],
  imports: [
    //MainPageComponent,--Parece ser que esto da un inconveniente
    //Declarar el Componente tanto en #declaration como en #exports
    CommonModule,
    FormsModule
  ],
})
export class DbzModule { }
