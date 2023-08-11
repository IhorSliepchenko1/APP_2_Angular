import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {


  public status = [
    {
      id: 1,
      title: 'How was your day?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel odio en urna ultrice...',
      icons: 'calendar_month',
      chevron: 'chevron_right',
    },
    {
      id: 2,

      title: 'Current Transist: 3rd House',
      desc: 'This is demonstrate siblings, hobbies, efforts, confidence, friends and short tr...',
      icons: 'schedule',
      chevron: 'chevron_right',
    },
  ];
}
