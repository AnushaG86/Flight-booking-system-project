import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../service/payment.service';
import {Router,ActivatedRoute} from "@angular/router";
import {FlightserviceService} from "../service/flight.service"
import {BookserviceService} from "../service/book-service.service"
declare var RazorPay:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  Flights:any=[];
  Book:any=[];
  id:any;

  constructor(private auth:PaymentService,private router:Router,private route:ActivatedRoute,private FlightserviceService:FlightserviceService,private BookService:BookserviceService) { }
    

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.id = params.get('id');

      this.FlightserviceService.GetSFlight(this.id).subscribe(res => {
        console.log(res)
        this.Flights =res;
      }) 
    }) 
    this.BookService.GetBook(this.id).subscribe(res => {
      console.log(res)
      this.Book =res;
    }) 
  

  }
  





  Pay(amount:any){
    var options={
      "key": "rzp_test_8C2GkCFmOdYo6q",
      "amount": amount*100,
      "currency": "INR",
      "name": "Flight Booking",
      "description": "Test Transaction",
      "order_id": "", 
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      },
      "handler":(res: any)=>{
        if(res){
          this.router.navigate(['checkin',this.id])
        }

      }
    }
    let rzpl=new this.auth.nativeWindow.Razorpay(options);
    rzpl.open();
  }
}
  
