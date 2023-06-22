import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-portfolio';
  constructor(private themeService: ThemeService) {
    this.themeService.setTheme('light-mode');
  }

  toggleTheme() {
    if (document.body.classList.contains('light-mode')) {
      this.themeService.setTheme('dark-mode');
    } else {
      this.themeService.setTheme('light-mode');
    }
  }
}
