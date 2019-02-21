import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExperiencesService } from '../experiences/experiences.service';
import { Experiences } from '../experiences/experiences.model';
import { Subscription } from 'rxjs';
import { MyCartService } from './mycart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css', '../app.component.css']
})
export class MyCartComponent implements OnInit, OnDestroy {

  myCartItems: Experiences[];

  isCartEmpty: boolean = true;

  subscription: Subscription;

  constructor(private myCartService: MyCartService) { }

  ngOnInit() {
    console.log("my cart component ng on init");
    this.myCartItems = this.myCartService.getMyCartItems();

    console.log("items from service -->" + this.myCartItems);

    if (this.myCartItems.length > 0) {
      console.log("cart is not empty");
      this.isCartEmpty = false;
    }

    this.subscription = this.myCartService.myCartChanged.subscribe(
      (myCartObj : Experiences[]) => {
        this.myCartItems = myCartObj;
        console.log("my cart component items -->" + this.myCartItems);
      },
      (error) => console.log("error -->" + error)
    );
    console.log("my cart component items -->" + this.myCartItems);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
