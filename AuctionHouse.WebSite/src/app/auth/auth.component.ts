import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-auth',
    templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {
    constructor(
        private userService: UserService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private messageService: MessageService
    ) {}

    public username: string;
    public password: string;
    private returnUrl: string;

    ngOnInit() {
        this.username = '';
        this.password = '';

        this.activatedRoute.queryParams.subscribe((params) => this.setReturnUrl(params));
    }

    public login() {
        this.userService.login({login: this.username, password: this.password})
            .subscribe(
                (data) => {
                    this.router.navigateByUrl(this.returnUrl);
                },
                (error) => {
                    this.messageService.add({severity: 'error', summary: 'Error occured', detail: error});
                }
            );
    }

    public logout() {
        this.userService.logout();
    }

    private setReturnUrl(params: Params): void {
        this.returnUrl = params['returnUrl'] ? params['returnUrl'] : '/';
    }
}
