import { Injectable } from "@angular/core";
import { Experiences } from "../experiences/experiences.model";
import { Subject } from "rxjs";

@Injectable()
export class MyCartService {
    myCartArr: Experiences[] = [];
    
    myCartChanged = new Subject<Experiences[]>();

    addExperiencesToMyCart(experiences: Experiences[]) {
        this.myCartArr.push(...experiences);
        this.myCartChanged.next(this.myCartArr);
        console.log("my cart changed -->" + this.myCartChanged);
    }

    getMyCartItemsAsObservable() {
      return this.myCartChanged.asObservable();
    }

    getMyCartItems() {
        return this.myCartArr.slice();
    }
}