import { Component } from '@angular/core';

import { NavController, PopoverController, ViewController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';


@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
      <button ion-item (click)="pushSignupPage()">push Signup Page</button>
    </ion-list>
  `
})
class PopoverPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) { }

  close() {
    this.viewCtrl.dismiss();
  }

  pushSignupPage() {
    this.viewCtrl.dismiss().then(() => {
      this.navCtrl.push(SignupPage);
    });
  }
}


@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
}
