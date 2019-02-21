import { Component, OnInit } from '@angular/core';
import { Experiences } from './experiences.model';
import { ExperiencesService } from './experiences.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css', '../app.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: Experiences[];

  constructor(private experiencesService: ExperiencesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  
  onAddExperience(selectedExperience: string) {
    console.log("inside on add experience");
    let experiencesObj: Experiences;

    this.experiences = this.experiencesService.getMyExperiences();

    if ("snowHiking" == selectedExperience) {
      experiencesObj = new Experiences("Snow Hiking", "../../assets/images/winter.png", "Snow Hiking Experience");
      this.experiences.push(experiencesObj);
    }
    if ("huskyTour" == selectedExperience) {
      experiencesObj = new Experiences("Husky Tour", "../../assets/images/dogs.png", "Husky Tour Experience");
      this.experiences.push(experiencesObj);
    }
    if ("waterfalls" == selectedExperience) {
      experiencesObj = new Experiences("Waterfalls", "../../assets/images/waterfalls.jpg", "Waterfalls Experience");
      this.experiences.push(experiencesObj);
    }
    if ("crashedPlane" == selectedExperience) {
      experiencesObj = new Experiences("Crashed Plane", "../../assets/images/winter.png", "Crashed Plane Experience");
      this.experiences.push(experiencesObj);
    }
    this.experiencesService.setExperiences(this.experiences);

    console.log(this.experiences);

    console.log("experiences cart: " + this.experiences.length);
  }

  onMyCart() {
    console.log("on my cart click");
    this.router.navigate(['mycart'], { relativeTo: this.route });
  }

}
