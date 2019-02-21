import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { Subject } from "rxjs";

@Injectable()
export class AuthService {
    
    token: string;

    signupStatus = new Subject<string>();

    signInStatus = new Subject<string>();

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            response => {
                this.signupStatus.next("success");
            }
        )
        .catch(error => {
            console.log(error);
            this.signupStatus.next("failure");
        });
    }

    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                console.log("Sign In Successful");
                console.log(response);
                this.signInStatus.next("success");
                this.router.navigate(['/experiences']);
            }
        )
        .catch(
            error => {
                console.log(error);
                this.signInStatus.next("failure");
            }
        );
    }

    
}