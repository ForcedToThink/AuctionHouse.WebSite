import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-component',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    constructor(
        private userService: UserService,
        private messageService: MessageService,
        private router: Router
    ) {}

    public login: string;
    public password: string;
    public confirmPassword: string;
    public firstName: string;
    public lastName: string;
    public email: string;

    public ngOnInit() {
        this.login = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
    }

    public register() {
        if (this.password !== this.confirmPassword) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error occured',
                detail: 'Password doesn\'t match.'
            });
            return;
        }
        this.userService.register({
            login: this.login,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        }).subscribe(
            (data) => { this.router.navigateByUrl(''); },
            (error) => { this.messageService.add({severity: 'error', summary: 'Error occured', detail: error}); }
        );
    }
}
