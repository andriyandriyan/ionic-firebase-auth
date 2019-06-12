import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    user: any = {}

    constructor(private navCtrl: NavController, private afAuth: AngularFireAuth, private alertCtrl: AlertController) {
    }

    login() {
		this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
		.then(response => {
			const { user: { emailVerified } } = response;
            if (!emailVerified) {
                const alert = this.alertCtrl.create({
                    title: 'Failed',
                    message: 'Email has not been verified',
                    buttons: ['OK']
                })
                alert.present()
            } else {
				this.navCtrl.setRoot('HomePage')
			}
        }).catch(err => {
            const alert = this.alertCtrl.create({
                title: 'Failed',
                message: err.message,
                buttons: ['OK']
            })
            alert.present()
        })
    }

    toRegister() {
        this.navCtrl.push('RegisterPage')
    }

    toResetPassword() {
        this.navCtrl.push('ResetPasswordPage')
    }
    
}
