import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'app-header-bar',
    templateUrl: 'app.header.bar.component.html'
})
export class HeaderBarComponent {

    constructor(
        private router: Router
    ) {}

    public goToAuth() {
        this.router.navigateByUrl('auth');
    }
}
