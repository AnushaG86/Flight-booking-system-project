const express = require('express');
const app = express();
 
const flightRoute = express.Router();

let SFlight=require('../model/Sflight');
 
/**
 * @swagger
 * /Sflights/{id}:
 *  get:
 *    summary: Fetch a flight.
 *    description: Used to fetch a single flight
 *    responses:
 *      '200':
 *        description: Successfully fetched flight
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

flightRoute.route('/Sflight/:id').get((req, res) => {
let flight_id=req.params.id;
  SFlight.find({flight_id}, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

/**
 * @swagger
 * /Sflights/:
 *  get:
 *    summary: Get all flights
 *    description: Used to get all the flights
 *    responses:
 *      '200':
 *        description: Got all flights successfully
 *      '500':
 *        description: Server error
 */



flightRoute.route('/Sflight').get((req, res) => {
    SFlight.find( (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  })
module.exports = flightRoute;