import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente2 } from './Components/componente2/componente2';
import { Componente1 } from './Components/componente1/componente1';
import { Componente5 } from './Components/componente5/componente5';

@Component({
  imports: [RouterOutlet, Componente2, Componente1, Componente5],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Projecto');
}
