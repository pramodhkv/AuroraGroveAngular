import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'experiences', component: ExperiencesComponent},
  { path: 'mycart', component: MyCartComponent },
  { path: 'confirmed', component: BookingConfirmedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
