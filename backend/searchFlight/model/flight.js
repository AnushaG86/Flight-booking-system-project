const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let flight = new Schema({
  flight_id:String,
  dept_from: String,
  dept_to: String,
  date: String,
  price:Number,
  time:String
}, {
  collection: 'flight'
})


 
module.exports = mongoose.model('Flight', flight)

