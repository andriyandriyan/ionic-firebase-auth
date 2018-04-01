import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

// Angular Fire Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

// AngularFire Settings
export const firebaseConfig = {
    apiKey: "AIzaSyDx_sw-5k4dadS5YZ_4gUzWT-1Xana9Phw",
    authDomain: "projectapp-654b9.firebaseapp.com",
    databaseURL: "https://projectapp-654b9.firebaseio.com",
    projectId: "projectapp-654b9",
    storageBucket: "projectapp-654b9.appspot.com",
    messagingSenderId: "796115019408"
};

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AngularFireAuth,
    ]
})
export class AppModule {}
