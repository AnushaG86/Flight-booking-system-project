const express = require('express');
const app = express();
var Razorpay = require('razorpay');
const paymentRoute = express.Router();
let Book=require("../../bookFlight/models/bookings")
const Flight=require("../../searchFlight/model/flight")
let Pay = require('../model/model');
var instance =new Razorpay({
  key_id:"rzp_test_8C2GkCFmOdYo6q",
  key_secret:"O7mksDzhg16FbiOL7WSRSoqC"
})
const morgan = require("morgan");
const pdf = require("html-pdf");


const router = require('../model/model');
 paymentRoute.post('/',(req,res,next)=>{
   var option={
     amount:req.body.amount*100,
     currency:"INR",
     receipt:"Order0141",
     payment_capture:0
   };
   instance.orders.create(option,(err,order)=>{
     if(err){
       console.log(err);
       next(err);
     }
     if(order){
       res.json({success:true,status:"order created successfully"})
     }
   })
 })







paymentRoute.route('/:id').get(async(req,res)=>{
  let flight_id=req.params.id;
    Book.find({flight_id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  
})
module.exports = paymentRoute;