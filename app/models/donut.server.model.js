'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Donut Schema
 */
var DonutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: '',
    required: 'Please fill in a name for the donut'
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  price: {
    type: Number,
    required: 'Please fill in the price for the donut'
  }
});

mongoose.model('Donut', DonutSchema);