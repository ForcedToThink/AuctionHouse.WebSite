import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SessionService } from './session.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class UserService {
    private currentUserSubject = new BehaviorSubject<User>(new User());
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

    public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(
        private api: ApiService,
        private sessionService: SessionService
    ) {}

    private setAuth(user: User) {
        this.sessionService.saveToken(user.authenticationToken);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    }

    public login(credentials: Object): Observable<User> {

        return this.api.post('account/login', credentials)
            .map(data => {
                this.setAuth(data);
                return data;
            });
    }

    public logout() {
        this.purgeAuth();
    }

    public populate(): Promise<any> {
        if (this.sessionService.getToken()) {
          return this.api.get('/user/current').toPromise()
            .then((data) => {
              this.setAuth(data);
            })
            .catch((err) => {
              this.purgeAuth();
            });
        } else {
          this.purgeAuth();
        }

        return new Promise((resolve, reject) => { resolve(); });
    }

    public getCurrentUser(): Observable<User> {
        return this.api.get('/user/current')
            .map((data) => data);
    }

    public register(registerModel: Object): Observable<User> {
        return this.api.post('/account/register', registerModel)
            .map(data => {
                this.setAuth(data);
                return data;
            });
    }

    public purgeAuth() {
        this.sessionService.destroyToken();
        this.currentUserSubject.next(new User);
        this.isAuthenticatedSubject.next(false);
    }
}
