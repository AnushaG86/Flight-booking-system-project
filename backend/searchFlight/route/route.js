const express = require('express');
const app = express();
 
const flightRoute = express.Router();
let Flight = require('../model/flight');
 
/**
 * @swagger
 * /:
 *  get:
 *    summary: Get all flights
 *    description: Used to get all the flights
 *    responses:
 *      '200':
 *        description: Got all flights successfully
 *      '500':
 *        description: Server error
 */


flightRoute.route('/').get((req, res) => {
  Flight.find( (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})


/**
 * @swagger
 * /{id}:
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

flightRoute.route('/:id').get((req, res) => {
let flight_id=req.params.id;
  Flight.find({flight_id}, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})


module.exports = flightRoute;