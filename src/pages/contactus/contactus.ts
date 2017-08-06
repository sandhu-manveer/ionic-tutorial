import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {
  contactForm: any;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public fb: FormBuilder) {
     this.contactForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
     });
  }

  submitForm() {
    console.log("here");
  }

}
