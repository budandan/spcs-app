import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase starts here
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from './services/firebase.service';
// Firebase ends here

import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { MyCurrentShiftComponent } from './my-current-shift/my-current-shift.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TimeCardComponent } from './time-card/time-card.component';
import { WeeklyReportComponent } from './weekly-report/weekly-report.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { TimeOffRequestComponent } from './time-off-request/time-off-request.component';
import { LoginComponent } from './login/login.component';
import { DirectoryComponent } from './directory/directory.component';
import { FbTestComponent } from './fb-test/fb-test.component';





const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'schedule',
    component: MyScheduleComponent
  },
  {
    path: 'home',
    component: MyCurrentShiftComponent
  },
  {
    path: 'assignments',
    component: AssignmentsComponent
  },
  {
    path: 'time-card',
    component: TimeCardComponent
  },
  {
    path: 'weekly-report',
    component: WeeklyReportComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'profile',
    component: MyProfileComponent
  },
  {
    path: 'time-off-request',
    component: TimeOffRequestComponent
  },
  {
    path: 'directory',
    component: DirectoryComponent
  },
  {
    path: 'fb',
    component: FbTestComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MyScheduleComponent,
    MyCurrentShiftComponent,
    MessagesComponent,
    NavbarComponent,
    MyProfileComponent,
    TimeCardComponent,
    WeeklyReportComponent,
    AssignmentsComponent,
    TimeOffRequestComponent,
    LoginComponent,
    DirectoryComponent,
    FbTestComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
