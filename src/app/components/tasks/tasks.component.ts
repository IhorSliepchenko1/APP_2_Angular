import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  public progress = '65%';

  public tasks = [
    {
      id: 1,
      name: 'Daily astromeditation',
      count: 3,
    },
    {
      id: 2,

      name: 'Daily sleep astromeditation',
      count: 1,
    },
    {
      id: 3,

      name: 'Daily mantra',
      count: 2,
    },
  ];
}
