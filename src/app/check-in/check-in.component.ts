import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {PaymentService} from '../service/payment.service';
import {FlightserviceService} from "../service/flight.service"
import {BookserviceService} from "../service/book-service.service"
import {CheckinService} from "../service/checkin.service"
@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  id:any;
  book:any=[];
  Flights:any=[];


  constructor(private route:ActivatedRoute,
    private auth:PaymentService,
    private router:Router,
    private FlightserviceService:FlightserviceService,
    private BookService:BookserviceService,
    private Checkin:CheckinService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.id = params.get('id');

    }) 
    this.BookService.GetBook(this.id).subscribe(res => {
      console.log(res)
      this.book =res;
    }) 
    this.FlightserviceService.GetSFlight(this.id).subscribe(res => {
      console.log(res)
      this.Flights =res;
    })
  }
  ticket(){
    this.Checkin.Adddetail(this.id).subscribe(res => {
      console.log(res);
    })
  
  var proceed = confirm("Download ticket");
      if (proceed) {
        this.Checkin.GetPdf().subscribe(res => {
          console.log(res)
        })
      }
    else {
      this.router.navigate(['']);
    }
  }


}
