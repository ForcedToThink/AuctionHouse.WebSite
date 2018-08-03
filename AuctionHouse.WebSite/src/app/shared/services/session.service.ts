import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

    private sessionTokenName = 'auctionHouseToken';

    public getToken() {
        return window.localStorage[this.sessionTokenName];
    }

    public saveToken(token: string) {
        window.localStorage[this.sessionTokenName] = token;
    }

    public destroyToken() {
        window.localStorage.removeItem(this.sessionTokenName);
    }
}
