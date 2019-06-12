import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

// Angular Fire Module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';

// AngularFire Settings
export const firebaseConfig = {
    apiKey: 'AIzaSyBHYBRdhSZcNsKJASJb6FbWLzp6R_EeFFY',
    authDomain: 'belajar-768ef.firebaseapp.com',
    databaseURL: 'https://belajar-768ef.firebaseio.com',
    projectId: 'belajar-768ef',
    storageBucket: 'belajar-768ef.appspot.com',
    messagingSenderId: '394662600237',
    appId: '1:394662600237:web:1800e138e26d75e4'
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
