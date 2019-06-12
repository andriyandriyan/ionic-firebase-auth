import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    user: any = {}
    error: string
    constructor(private afAuth: AngularFireAuth, private navCtrl: NavController, private alertCtrl: AlertController) {
    }
    
    register() {
        this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
            let alert = this.alertCtrl.create({
                title: 'Success',
                message: 'Email verification has been sent',
                buttons: ['OK']
            })
            alert.present()
            this.navCtrl.pop()
            this.emailVerification()
        })
        .catch(err => {
            console.log(err)
            this.error = err.message
        })
    }
    
    emailVerification() {
        this.afAuth.auth.currentUser.sendEmailVerification().then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error)
        })
    }
}
