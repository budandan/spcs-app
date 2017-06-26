import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onLogin = new EventEmitter<boolean>();

  login(e: boolean) {
    this.onLogin.emit(e);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }


}
