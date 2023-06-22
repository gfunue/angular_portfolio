import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'full-stack web developer';
  skills = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'Node.js',
    // Add more skills as needed
  ];
}
