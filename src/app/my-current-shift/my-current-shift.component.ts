import { Component, OnInit } from '@angular/core';
import { ShiftsService } from '../shared/shifts.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-my-current-shift',
  templateUrl: './my-current-shift.component.html',
  styleUrls: ['./my-current-shift.component.css'],
  providers: [ShiftsService]
})
export class MyCurrentShiftComponent implements OnInit {


    client: String;
    clientImage: String;
    staff: String;
    date: String;
    startTime: String;
    endTime: String;
    locationShift: String;
    locationPickup: String;
    locationDropoff: String;
    activities: String;
    chores: String;
    medicine: String;
    notes: String;
    staffNotes: String;
    medicineTaken: boolean;
    changedHours: boolean;
    choresCompleted: boolean;

    // Medicine Button
    medText: String = 'Take Medicine';
    medClass: String = 'btn btn-danger';

    // chore button
    choresText: String = 'Chores Not Completed';
    choresClass: String = 'btn btn-danger';
    items: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase, private shiftsService: ShiftsService) { 
    this.items = db.list('/items');
    this.client = shiftsService.getClient();
    this.clientImage = shiftsService.getClientImage();
    this.staff = shiftsService.getStaff();
    this.date = shiftsService.getDate();
    this.startTime = shiftsService.getStartTime();
    this.endTime = shiftsService.getEndTime();
    this.locationShift = shiftsService.getLocationShift();

    if (shiftsService.getLocationPickup() === null) {
      this.locationPickup = 'None';
    } else {
      this.locationPickup = shiftsService.getLocationPickup();
    }

    if (shiftsService.getLocationDropoff() === null) {
      this.locationDropoff = 'None';
    } else {
      this.locationDropoff = shiftsService.getLocationDropoff();
    }
    
    this.activities = shiftsService.getActivites();
    this.chores = shiftsService.getChores();
    this.medicine = shiftsService.getMedicine();
    this.notes = shiftsService.getNotes();
    this.medicineTaken = shiftsService.getMedicineTaken();
  }

  ngOnInit() {
  }

  submitComments() {
    console.log('submitting comments');
  }

  takeMedicine() {
    this.medicineTaken = true;
    //this.shiftsService.setMedicineTaken();
    this.medText = 'Medicine Taken';
    this.medClass = 'btn btn-success disabled';
  }

  doChores() {
    this.choresCompleted = true;
    this.choresClass = 'btn btn-success disabled';
    this.choresText = 'Chores Completed';
  }

  changeHours() {
    this.changedHours = true;
    console.log(this.changedHours);
  }

}
