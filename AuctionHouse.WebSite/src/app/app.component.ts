import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[];

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.items = [
      {
        label: 'These',
        icon: 'fa fa-fw fa-rocket'
      },
      {
        label: 'Are',
        icon: 'fa fa-fw fa-scissors',
        items: [
          {
            label: 'Some',
            icon: 'fa fa-fw fa-cogs',
          },
          {
            label: 'Cool',
            icon: 'fa fa-fw fa-rebel'
          }
        ]
      },
      {
        label: 'Menu'
      },
      {
        label: 'Itemms',
        icon: 'fa fa-fw fa-fighter-jet'
      }
    ];
  }
}
