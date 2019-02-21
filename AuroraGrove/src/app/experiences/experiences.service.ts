import { Injectable } from "@angular/core";
import { Experiences } from "./experiences.model";
import { Subject } from "rxjs";
import { MyCartService } from "../my-cart/mycart.service";


@Injectable()
export class ExperiencesService {

    constructor(private myCartService: MyCartService) {}

    private experiencesArr: Experiences[] = [];

    experiencesChanged = new Subject<Experiences[]>();

    getMyExperiencesAsObservable() {
      return this.experiencesChanged.asObservable();
    }

    getMyExperiences() {
      return this.experiencesArr.slice();
    }

    setExperiences(experiences: Experiences[]) {
        this.myCartService.addExperiencesToMyCart(experiences);
    }
}