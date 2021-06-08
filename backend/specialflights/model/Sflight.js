const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

let Sflight = new Schema({
  flight_id:String,
  dept_from: String,
  dept_to: String,
  date: String,
  price:Number,
  time:String
}, {
  collection: 'Sflight'
})
 
module.exports = mongoose.model('SFlight', Sflight)
