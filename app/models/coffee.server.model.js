'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Coffee Schema
 */
var CoffeeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: '',
    required: 'Please fill in a name for the coffee'
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  price: {
    type: Number,
    required: 'Please fill in the price for the coffee'
  },
  size: {
    type: [String],
    required: 'Please fill in the size for the coffee'
  }
});

mongoose.model('Coffee', CoffeeSchema);