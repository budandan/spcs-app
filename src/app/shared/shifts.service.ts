import { Injectable } from '@angular/core';
import { Shift } from './shift';
import { TESTSHIFT } from './fakeshifts';
import { Http } from '@angular/http';

// this is a user service that will interact with database

@Injectable()
export class ShiftsService {

  getClient(): String {
    return TESTSHIFT.client;
  }

  getClientImage(): String {
    return TESTSHIFT.clientImage;
  }

  getStaff(): String {
    return TESTSHIFT.staff;
  }

  getDate(): String {
    return TESTSHIFT.date;
  }

  getStartTime(): String {
    return TESTSHIFT.startTime;
  }

  getEndTime(): String {
    return TESTSHIFT.endTime;
  }

  getLocationShift(): String {
    return TESTSHIFT.locationShift;
  }

  getLocationPickup(): String {
    return TESTSHIFT.locationPickup;
  }

  getLocationDropoff(): String {
    return TESTSHIFT.locationDropoff;
  }

  getActivites(): String {
    return TESTSHIFT.activities;
  }

  getChores(): String {
    return TESTSHIFT.chores;
  }

  getMedicine(): String {
    return TESTSHIFT.medicine;
  }

  getNotes(): String {
    return TESTSHIFT.notes;
  }

  getStaffNotes(): String {
    return TESTSHIFT.staffNotes;
  }
  setStaffNotes(notes: String) {
    TESTSHIFT.staffNotes = notes;
  }

  getMedicineTaken(): boolean {
    return TESTSHIFT.medicineTaken;
  }
  setMedicineTaken() {
    TESTSHIFT.medicineTaken = true;
  }

  getChangedHours(): boolean {
    return TESTSHIFT.changedHours;
  }
  setChangedHours() {
    TESTSHIFT.changedHours = true;
  }

  constructor() { }


}
