import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.component.html',
  styleUrls: ['./weekly-report.component.css']
})
export class WeeklyReportComponent implements OnInit {
  month: String = 'June';
  client: String = 'Michael Pinto';

  goal1: String = 'Michael likes to stay busy. What activities did Michael do this week? How did staff help him participate in the community?';
  input1: String = '';

  goal2: String = 'Michael likes to stay active and make good food choices. How did staff help Michael make good food choices? How well did Michael exercise this week?';
  input2: String = '';

  goal3: String = 'Michael wants to be involved in purchasing decisions. How did staff help Michael make purchases?';
  input3: String = '';

  isCompleted: boolean = false;

  weeklySubmit() {
    this.isCompleted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
