import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setTheme(theme: 'light-mode' | 'dark-mode') {
    if (isPlatformBrowser(this.platformId)) {
      document.body.className = '';
      document.body.classList.add(theme);
    }
  }
}
