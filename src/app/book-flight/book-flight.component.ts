import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BookserviceService} from '../service/book-service.service';
import { FormGroup, FormBuilder ,FormsModule,ReactiveFormsModule} from "@angular/forms";
import {FlightserviceService} from "../service/flight.service"
import {SpecialflightsService} from "../service/specialflights.service"
import { SpecialflightComponent } from '../specialflight/specialflight.component';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  Flights:any=[];
   id:any;
  

  bookForm: FormGroup;
     constructor(
      public formBuilder: FormBuilder,
      private router: Router,
      private BookserviceService: BookserviceService,
      private FlightserviceService: FlightserviceService,
      private route:ActivatedRoute,
      private specialflight:SpecialflightsService
    ) { 
      this.bookForm = this.formBuilder.group({
        flight_id:[''],
        name: [''],
        Phoneno: [''],
        amount:['']
      })
    }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.id = params.get('id');

    this.FlightserviceService.GetSFlight(this.id).subscribe(res => {
      console.log(res)
      this.Flights =res;
    })

      this.specialflight.GetSpFlight(this.id).subscribe(res => {
        console.log(res)
        this.Flights =res;
      })

    })
}
  onSubmit(data:any):any{
    this.BookserviceService.AddBook(data).subscribe(res => {
      console.log(res)
    }) 
    
    var proceed = confirm("confirm booking");
      if (proceed) {
        this.router.navigate(['payment',this.id]);
      }
    else {
      this.router.navigate(['']);
    }
  }

    
    

  
  }




