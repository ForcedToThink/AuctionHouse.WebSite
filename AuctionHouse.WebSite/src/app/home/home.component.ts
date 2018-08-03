import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared';

@Component({
    selector: 'app-home-page',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(
        private userService: UserService
    ) {}

    public userName = '';

    public tryPost(event) {
        alert('asdf');
        this.userService.getCurrentUser()
        .subscribe(
            (data) => alert(data.fullName),
            (error) => {
                alert(error);
            }
          );
    }

    ngOnInit() {
        this.userService.currentUser.subscribe(user => this.userName = user.fullName);
    }
}
