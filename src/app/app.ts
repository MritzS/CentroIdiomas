import { Component } from '@angular/core';
import { Componente1 } from './Components/componente1/componente1';
import { Componente2 } from './Components/componente2/componente2';
import { Componente3 } from './Components/componente3/componente3';
import { Componente4 } from './Components/componente4/componente4';
import { Componente5 } from './Components/componente5/componente5';

@Component({
  selector: 'app-root',
  imports: [Componente1, Componente2, Componente3, Componente4, Componente5],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}