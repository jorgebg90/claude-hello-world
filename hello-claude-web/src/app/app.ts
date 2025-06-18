import { Component } from '@angular/core';
import { StatsChart } from './stats-chart/stats-chart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StatsChart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'hola-mundo-web';
  
  constructor() {
    console.log('App component initialized');
  }
} 