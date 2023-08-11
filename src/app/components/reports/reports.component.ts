import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  public reports = [
    {
      id: 1,
      icons: 'person',
      title: 'Astro- psychological report',
      desc: 'Some short description of this type of report.',
    },
    {
      id: 2,
      icons: 'calendar_month',
      title: 'Monthly prediction report',
      desc: 'Some short description of this type of report.',
    },
    {
      id: 3,
      icons: 'task_alt',
      title: 'Daily Prediction',
      desc: 'Some short description of this type of report.',
    },
    {
      id: 4,
      icons: 'favorite_border',
      title: 'Love report',
      desc: 'Some short description of this type of report.',
    },
  ];
}
