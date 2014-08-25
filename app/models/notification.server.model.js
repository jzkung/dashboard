'use strict';

/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

/**
 * Notification Schema
 */
 var NotificationSchema = new Schema({
 		title: {type: String, required: true},
 		description: {type: String},
 		startDate: {type: Date, default: Date.now},
 		endDate: {type: Date},
 		userGroups: {type: [String]}
 });

 mongoose.model('Notification', NotificationSchema);