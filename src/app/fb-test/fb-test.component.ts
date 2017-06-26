import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Shift } from '../shared/shift';

@Component({
  selector: 'app-fb-test',
  templateUrl: './fb-test.component.html',
  styleUrls: ['./fb-test.component.css']
})
export class FbTestComponent implements OnInit {

  shift: Shift;

    // Medicine Button
    medText: String;
    medClass: String;

    // chore button
    choresText: String = 'Chores Not Completed';
    choresClass: String = 'btn btn-danger';

  constructor(private firebaseService: FirebaseService) { 
    this.firebaseService.getShifts().subscribe(shifts => {
      this.shift = shifts;
      this.shift.medicineTaken = shifts.medicineTaken;
      console.log(this.shift.medicineTaken);
      console.log(shifts.medicineTaken);
    });

    if (!this.shift.medicineTaken) {
      this.medText = 'Medicine Not Taken';
      this.medClass = 'btn btn-danger';
    }
    else if (this.shift.medicineTaken) {
      this.medText = 'Medicine Taken';
      this.medClass = 'btn btn-success disabled';
    } else {
      this.medText = 'Medicine Not Needed';
      this.medClass = 'btn btn-default disabled';
    }
  }

  ngOnInit() {
  }

  takeMedicine() {
    this.firebaseService.shifts.update({ medicineTaken: true });
    this.medText = 'Medicine Taken';
    this.medClass = 'btn btn-success disabled';
  }

  doChores() {
    this.firebaseService.shifts.update({ choresCompleted: true });
    this.choresClass = 'btn btn-success disabled';
    this.choresText = 'Chores Completed';
  }

  changeHours() {
    this.firebaseService.shifts.update({ changedHours: true });
  }
}
