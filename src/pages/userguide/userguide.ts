import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SePage } from '../se/se';


@IonicPage()
@Component({
  selector: 'page-userguide',
  templateUrl: 'userguide.html',
})
export class UserguidePage {

  // list=['Register','How to register','What to do','Report','Contact us'];
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        'title': 'Registration',
        'description': 'To register to the app, you need to fill in the First name, Last name, Email, Phone number and Password. ',
        'description1': ' When all information is available, click on Register button.',
        'desc' : 'How do I log in?',
        'desc1': 'Enter your email and password that have you registered. Then click on Login button.'
      },
      {
        'title': 'Using a CBB bike',
        'description': 'Choose a bike from Rent-A-Bike menu button. ',
        'description1': 'Then choose  where will you dock the bicycle and proceed to payment',
        'desc': 'How do I unlock the bike?',
        'desc1': 'After payment process, you will be able to unlock using the app. '
      },
    
      {
        'title': 'CBB policy',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'title': 'Report',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'Contact us',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(SePage, { item: item });
}



  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad UserguidePage');
  // }

  // nav(item){
  //   this.navCtrl.push(SePage,{
  //     'value' : item
  //   })
  // }

}
