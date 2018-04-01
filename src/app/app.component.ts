import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any

    constructor(private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => {
            if (!user || !user.emailVerified) {
                this.rootPage = 'LoginPage'
            } else {
                this.rootPage = 'HomePage'
            }
        })
    }
}

