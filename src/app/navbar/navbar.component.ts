import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  numberOfMessages: number = 2;
  username: String = 'Daniel Ferolino';

  @Output() onLogout = new EventEmitter<boolean>();

  logout(e: boolean) {
    this.onLogout.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
