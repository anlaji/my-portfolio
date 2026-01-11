import { Component, signal } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [MatMenuModule, MatIconModule],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {

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
