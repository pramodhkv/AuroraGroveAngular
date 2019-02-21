import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experiences } from '../experiences/experiences.model';
import { ExperiencesService } from '../experiences/experiences.service';
import { Subscription } from 'rxjs';
import { MyCartService } from '../my-cart/mycart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../app.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  cartItemsLength: number = 0;

  experiences: Experiences[];

  subscription: Subscription;

  constructor(private experiencesService: ExperiencesService, private myCartService: MyCartService) { }

  ngOnInit() {
    this.subscription = this.myCartService.getMyCartItemsAsObservable().subscribe(
      (newCartItems: Experiences[]) => {
        console.log("header component newCartItems -->" +newCartItems);
        this.experiences = newCartItems;
        this.cartItemsLength = this.experiences.length;
      }
    );
    console.log("header components final experiences -->" + this.experiences);
  }

  ngOnDestroy() {
    console.log("header component unsubscribe");
    //this.subscription.unsubscribe();
  }

}
