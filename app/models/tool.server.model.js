'use strict';

/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

/**
 * Tool Schema
 */
 var ToolSchema = new Schema({
 	name: {type: String, required: true},
 	description: {type: String},
 	url: {type: String},
 	userGroups: {type: [Schema.Types.ObjectId], ref: 'Usergroup'}
 });

 mongoose.model('Tool', ToolSchema);