import { Client } from './client';
import { Staff } from './staff';
import { Chore } from './chore';
import { Activity } from './activity';


export class Shift {
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
    medicineTaken: boolean = null;
    choresCompleted: boolean = null;
    changedHours: boolean = null;
}