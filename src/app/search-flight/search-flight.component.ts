import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightserviceService } from '../service/flight.service';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  Flights:any=[];
  

  
     constructor(private router:Router){}
   
    ngOnInit() { }
   
    onSubmit(): any {
      this.router.navigate(['flight-list']); 
    }
    
    

}
