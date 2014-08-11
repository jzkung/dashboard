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
 		link: {type: String},
 		startDate: {type: Date},
 		endDate: {type: Date},
 		userGroups: {type: [String]}
 });

 mongoose.model('Notification', NotificationSchema);