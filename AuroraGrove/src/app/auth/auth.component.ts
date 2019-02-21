import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css', '../app.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private modalService: NgbModal, private router: Router, private route: ActivatedRoute, private authService: AuthService) { }
  
  isSignupSuccessful: boolean = false;

  ngOnInit() {
    console.log("inside auth component");
    this.authService.signupStatus.subscribe(
      (signupStatus: string) => {
        if ("success" == signupStatus) {
          this.isSignupSuccessful = true;
        }
      }
    );

    this.authService.signInStatus.subscribe(
      (signInStatus: string) => {
        if ("success" == signInStatus) {
          this.modalService.dismissAll();
        }
      }
    );
  }

  openRegistration(registrationContent: any) {
    this.modalService.open(registrationContent);
  }

  openSignIn(signInContent: any) {
    console.log(signInContent);
    this.modalService.dismissAll();
    this.modalService.open(signInContent);
  }

  /* onRegister() {
    console.log("on register click");
    this.modalService.dismissAll();
    this.router.navigate(['experiences'], {relativeTo: this.route});
  } */

  onSignup(signupForm: NgForm) {
    const email = signupForm.value.email;
    const password = signupForm.value.password;
    this.authService.signupUser(email, password);
  }

  onSignIn(signInForm: NgForm) {
    const email = signInForm.value.email;
    const password = signInForm.value.password;
    this.authService.signInUser(email, password);
  }

}
