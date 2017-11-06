import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { DockingdetailPage } from '../dockingdetail/dockingdetail';
import { MapsPage } from '../maps/maps';

 


@IonicPage()
@Component({
  selector: 'page-searchdocking',
  templateUrl: 'searchdocking.html',
})
export class SearchdockingPage {

  items = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();

  }

  openNavDetailsPage(item) {
    this.navCtrl.push(DockingdetailPage, { item: item });
}
 

  initializeItems() {

    this.items = [
      {
        "name": "Taman Haji Sir Muda Omar Ali Saifuddien",
        "lat": 4.889606,
        "lng": 114.941674,
        "area" : "Bandar Seri Begawan",
        "address": "Jln Elizabeth Dua, Bandar Seri Begawan BS8611, Brunei",
        "id": "1"
      },
      {
        "name": "Masjid Omar Ali Saifuddien",
        "lat": 4.889472,
        "lng": 114.939287,
        "area" : "Bandar Seri Begawan",
        "address": "Jalan Masjid Omar 'Ali Saifuddien, Bandar Seri Begawan BS8711, Brunei",
        "id": "2"
      },
    
      {
        "name": "Mercu Dirgahayu 60",
        "lat": 4.88673,
        "lng":  114.942183,
        "area" : "Bandar Seri Begawan",
        "address": "Jalan McArthur, Bandar Seri Begawan BS8111, Brunei",
        "id": "3"
      },
      {
        "name": "Radisson Hotel",
        "lat":  4.8947,
        "lng": 114.942505,
        "area" : "Bandar Seri Begawan",
        "address": "Jln Tasek, Bandar Seri Begawan, Brunei",
        "id": "4"
      },
      {
        "name": "Tamu Kianggeh",
        "lat": 4.890445,
        "lng": 114.945016,
        "area" : "Bandar Seri Begawan",
        "address": "Jalan Kianggeh, Bandar Seri Begawan BS8111, Brunei",
        "id": "5"
      },
      {
        "name": "Q-lap Mall",
        "lat": 4.904021,
        "lng": 114.926358,
        "area" : "Kiulap",
        "address": "Jalan Komersial Kiulap, Bandar Seri Begawan, Brunei",
        "id": "6"
      },
      {
        "name": "The Mall",
        "lat": 4.90602,
        "lng": 114.916456,
        "area" : "Gadong",
        "address": "The Mall, Bandar Seri Begawan, Brunei",
        "id": "7"
      },

      {
        "name": "The Core",
        "lat": 4.979574,
        "lng": 114.898053,
        "area" : "Tungku Link",
        "address": "Ubd Core",
        "id": "8"
      },
      {
        "name": "UTB Multipurpose Hall",
        "lat": 4.980165,
        "lng": 114.902524,
        "area" : "Tungku Link",
        "address": "UTB Hall",
        "id": "9"
      },
      {
        "name": "University Mosque",
        "lat": 4.977262,
        "lng": 114.895781,
        "area" : "Tungku Link",
        "address": "University Mosque Universiti Brunei Darussalam",
        "id": "10"
      }
    ]

  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
       
      })
    }
    
}

maps(){
  this.navCtrl.setRoot(MapsPage);
}

  
}
