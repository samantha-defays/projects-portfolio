import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private titleService: Title
  ) {
    this.setTitle('Portfolio de Samantha Defays');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
