import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services';

@Component ({
    selector: 'app-header-bar',
    templateUrl: 'app.header.bar.component.html'
})
export class HeaderBarComponent {

    constructor(
        private router: Router,
        private userService: UserService
    ) {}

    public goToAuth() {
        this.router.navigateByUrl('auth');
    }

    public logout() {
        this.userService.logout();
    }
}
