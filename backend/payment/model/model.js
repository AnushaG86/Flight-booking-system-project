const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let payment = new Schema({
  flight_id:String,
  booking_id:String,
  token_id:String
}, {
  collection: 'payment'
})
 
module.exports = mongoose.model('Payment', payment)

