import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule
  ],
})
export class App {
  protected readonly activeTab = signal('bio');
  protected readonly sections = ['bio', 'projects', 'contact'] as const;
  protected readonly currentLang = signal<'en' | 'es' | 'de'>('en');

  goTo(section: string): void {
    this.activeTab.set(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  setLanguage(lang: any) {
    this.currentLang.set(lang);
    // TODO: ngx-translate or similar
  }
}