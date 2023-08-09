import { Component, ViewEncapsulation } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from './pages/home/home';

@Component({
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  rootPage: any = HomePage;

  constructor(private platform: Platform) {
    this.platform.ready();
  }
}
