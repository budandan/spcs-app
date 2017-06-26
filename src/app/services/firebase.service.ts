import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class FirebaseService {
  shifts: FirebaseObjectObservable<Shift>;
  constructor(private af: AngularFireDatabase) { }

  getShifts() {
    this.shifts = this.af.object('/shifts');
    return this.shifts;
  }

}

interface Shift {
  $key?: String;
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
  choresCompleted: boolean;
  changedHours: boolean;

}