import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AuroraGrove';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDxaZNzz1PxkF2Av1HMDQsH3bILDED1cLE",
      authDomain: "angular-aurora-grove.firebaseapp.com" 
    });
  }
}
