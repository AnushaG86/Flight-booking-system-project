import { Component, OnInit } from '@angular/core';
import {FlightserviceService} from "../service/flight.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  Flights:any=[];
  constructor(private FlightserviceService:FlightserviceService,private router:Router) { }

  ngOnInit(): void {
    this.FlightserviceService.GetFlight().subscribe(res => {
      console.log(res)
      this.Flights =res;
    }) 
      
       
  }
  onclick(id:any):any{
    this.router.navigate(['bookflight',id]);
  }

}
