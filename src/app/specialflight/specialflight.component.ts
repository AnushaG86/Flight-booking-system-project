import { Component, OnInit, ViewChild } from '@angular/core';
import {SpecialflightsService} from "../service/specialflights.service";
import {Router} from "@angular/router";





@Component({
  selector: 'app-specialflight',
  templateUrl: './specialflight.component.html',
  styleUrls: ['./specialflight.component.css']
})
export class SpecialflightComponent implements OnInit {
  id:any;
  Flights:any=[];
  constructor(private SpecialflightsService:SpecialflightsService,private router:Router){}
 
  ngOnInit(): void {
    this.SpecialflightsService.GetAllSFlight() .subscribe(res => {
      console.log(res)
      this.Flights =res;
    }) 
      
       
  }
  onclick(id:any):any{
    this.router.navigate(['bookflight',id]);
  }

  }

