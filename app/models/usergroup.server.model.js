'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Usergroup Schema
 */
var UsergroupSchema = new Schema({
	name: {
		type: String,
	    trim: true,
	    default: '',
	    required: 'Please fill in a name for the user group'
	}
});

mongoose.model('Usergroup', UsergroupSchema);