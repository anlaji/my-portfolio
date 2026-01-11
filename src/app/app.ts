import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
  protected readonly sections = ['bio', 'projects', 'contact'];
  protected readonly activeTab = signal('bio');

  goTo(id: string): void {
    this.activeTab.set(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
