import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from '../services';
import { Router } from '@angular/router';

@Component ({
    selector: 'app-side-menu',
    templateUrl: 'app.side.menu.component.html'
})
export class SideMenuComponent implements OnInit {
    items: MenuItem[];
    userName: string;

    constructor(
      private userService: UserService,
      private router: Router
    ) {}

    ngOnInit() {
      this.items = [
            {
              label: 'Home',
              icon: 'fa fa-fw fa-home',
              routerLink: ['']
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

      this.userService.currentUser.subscribe(user => this.userName = user.fullName);
    }
}
