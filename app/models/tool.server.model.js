'use strict';

/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

 var ItemSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String},
  url: {type: String},
  userGroups: {type: [String]}
 });

var ToolSchema = new Schema({
  category: {type: String, required: true},
  userGroups: {type: [String]},
  items: {type: [ItemSchema]}
 });

mongoose.model('Tool', ToolSchema);