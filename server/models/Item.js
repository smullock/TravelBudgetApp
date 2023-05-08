const { Schema, model } = require('mongoose');


const itemSchema = new Schema({
    date: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  hotel: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  flights: {
    type: Number,
    required: true,
  },
  accomodation: {
    type: Number,
    required: true,
  },
  food: {
    type: Number,
    required: true,
  },
  activities: {
    type: Number,
    required: true,
  },
  
});


const Item = model('Item', itemSchema);

module.exports = Item;