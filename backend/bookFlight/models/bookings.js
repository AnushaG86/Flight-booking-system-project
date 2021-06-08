
const mongoose = require('mongoose');
const { type } = require('os');
const Schema = mongoose.Schema;
 
let booking = new Schema({
  booking_id: mongoose.Schema.Types.ObjectId,
  flight_id:{type:String},
  name: {type: String},
  Phoneno: {type: Number},
  amount:{type:Number},
 }, {

  collection: 'booking'
 }
)




 
module.exports = mongoose.model('Book', booking);
