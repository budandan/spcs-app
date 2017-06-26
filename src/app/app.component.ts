import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = true;

  login(e: boolean) {
    this.isLoggedIn = true;
    console.log('hi');
  }

  logout(e: boolean) {
    this.isLoggedIn = false;
    console.log('bye');
  }

  constructor() {

  }

}
