import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ExperiencesService } from './experiences/experiences.service';
import { HeaderComponent } from './header/header.component';
import { MyCartService } from './my-cart/mycart.service';
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    ExperiencesComponent,
    MyCartComponent,
    HeaderComponent,
    BookingConfirmedComponent
  ],
  entryComponents: [
    HomeComponent,
    AuthComponent,
    ExperiencesComponent,
    MyCartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbModalModule
  ],
  providers: [ExperiencesService, MyCartService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
