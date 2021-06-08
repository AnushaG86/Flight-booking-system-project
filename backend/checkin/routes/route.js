const express = require('express');
const app = express();
const paymentRoute = express.Router();
let Book=require("../../bookFlight/models/bookings")
const Flight=require("../../searchFlight/model/flight")

const pdf = require("html-pdf");

const pdfTemplate = require("../documents/index1");
/**
 * @swagger
 * /{id}:
 *  get:
 *    summary: Create a ticket pdf.
 *    description: Used to create ticket pdf
 *    responses:
 *      '200':
 *        description: Successfully created pdf
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


paymentRoute.post(('/createpdf', (req, res) => {
  var booking={
    deptTo:"bengaluru",
    deptFrom:"delhi",
    date:"06-06-2021"
  }
  pdf.create(pdfTemplate(booking), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
}));

paymentRoute.get('/fetchpdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});


/**
 * @swagger
 * /{id}:
 *  get:
 *    summary: Create a booking.
 *    description: Used to get a specific booking
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