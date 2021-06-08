const express=require('express');
const router=express.Router();
const Flight=require("../models/flight");
const app = express();
const BookRoute = express.Router();
const Book= require('../models/bookings');
const fetch = require('node-fetch');
const flight=[];


/*fetch('http://localhost:8000/api')
    .then(res => res.json())
    .then(flight=> {
        console.log(flight);
})*/

/**
 * @swagger
 * /:
 *  post:
 *    summary: Creates a new booking.
 *    description: Used to create new booking
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: Object
 *            properties:
 *              flight_id:
 *                type: String
 *              name:
 *                type: String
 *              Phoneno:
 *                type: Number
 *              Amount:
 *                type: Number
 *              
 *            example:
 *              flight_id: BK123
 *              name: Sam
 *              Phoneno:8967563837
 *              Amount: 4000
 *    responses:
 *         '200':
 *           description: A successful response
 *         '500':
 *           description: Server error
 */


BookRoute.route('/').post( async (req, res, next) => {
  
 
  const booking = new Book({ 
    flight_id:req.body.flight_id,
    name:req.body.name,
    Phoneno:req.body.Phoneno,
    amount:req.body.amount,
  }) 
  booking.save()
  .then(result=>{
    console.log(result);
    res.status(201).json({
      booking})
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  })
 })
 /**
 * @swagger
 * /{id}:
 *  get:
 *    summary: Fetch a booking.
 *    description: Used to fetch a single booking
 *    responses:
 *      '200':
 *        description: Successfully fetched booking
 *      '500':
 *        description: Server error
 *  parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *         type: String
 *         description: The flight ID
 */




 BookRoute.route('/:id').get((req, res) => {
  let flight_id=req.params.id;
    Book.find({flight_id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  })

  



  

 


  
module.exports = BookRoute;