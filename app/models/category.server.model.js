'use strict';

/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

/**
 * Category Schema
 */
 var CategorySchema = new Schema({
 	category: {type: String, required: true},
 	userGroups: {type: [Schema.Types.ObjectId], ref: 'Usergroup'}
 	//tools: {type: [ToolSchema]}
 });

 mongoose.model('Category', CategorySchema);