import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';

@IonicPage()
@Component({
    selector: 'page-reset-password',
    templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
    user: any = {}

    constructor(private afAuth: AngularFireAuth, private alertCtrl: AlertController, private navCtrl: NavController) {
    }
    
    reset() {
        this.afAuth.auth.sendPasswordResetEmail(this.user.email).then(() => {
            this.showAlert('Success', 'Email reset password has been sent')
            this.navCtrl.pop()
        }).catch(error => {
            console.log(error)
            this.showAlert('Failed', error.message)
        })
    }

    showAlert(title, message) {
        let alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: ['OK']
        })
        alert.present()
    }
    
}
