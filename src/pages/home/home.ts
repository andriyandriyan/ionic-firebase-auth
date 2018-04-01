import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	user: any = {}
	
	constructor(private navCtrl: NavController, private afAuth: AngularFireAuth, private alertCtrl: AlertController) {
		this.afAuth.authState.subscribe(user => {
			if (user != null) {
				this.user.email = user.email
			} else {
				this.navCtrl.setRoot('LoginPage')
			}
		})
	}
	
	changePassword() {
		let emailAddress = this.user.email
		this.afAuth.auth.sendPasswordResetEmail(emailAddress).then(() => {
			let alert = this.alertCtrl.create({
                title: 'Success',
                message: 'Email reset password has been sent',
                buttons: ['OK']
            })
            alert.present()
		}).catch((error) => {
			console.log(error)
		});
	}
	
	logout() {
		let confirm = this.alertCtrl.create({
			title: 'Confirmation',
			message: 'Logout from account ?',
			buttons: [
				{ text: 'Cancel' },
				{
					text: 'Yes',
					handler: () => {
						this.afAuth.auth.signOut()
						this.navCtrl.setRoot('LoginPage')
					}
				}
			]
		})
		confirm.present()
	}
	
}
