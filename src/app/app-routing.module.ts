import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { CheckInComponent } from './check-in/check-in.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SpecialflightComponent } from './specialflight/specialflight.component';

const routes: Routes = [
  {path:'',component:SearchFlightComponent},
  {path:'flight-list',component:FlightListComponent},
  {path:'bookflight/:id',component:BookFlightComponent},
  {path:'payment/:id',component:PaymentComponent},
  {path:'login',component:LoginComponent},
  {path:'checkin/:id',component:CheckInComponent},
  {path:'specialflight',component:SpecialflightComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
