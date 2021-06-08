import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import {LoginComponent} from "./login/login.component"
import { CheckInComponent } from './check-in/check-in.component';
import { RegisterComponent } from './register/register.component';
import { SpecialflightComponent } from './specialflight/specialflight.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    BookFlightComponent,
    PaymentComponent,
    FlightListComponent,
    LoginComponent,
    CheckInComponent,
    RegisterComponent,
    SpecialflightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
