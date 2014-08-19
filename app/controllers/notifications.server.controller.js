'use strict';

/**
 * Module dependencies.
 */


 var mongoose = require('mongoose');
 var moment = require('moment'),
 Notification = mongoose.model('Notification'),
 User = mongoose.model('User'),
 Usergroup = mongoose.model('Usergroup'),
 _ = require('lodash');
 var currentTime = Date.now();

/**
 * Create a Notifwescftygvjbhn m,ication
 */
 exports.create = function(req, res) {

 };

/**
 * Show the current Notification
 */
 exports.read = function(req, res) {

 };
/**
 * Update a Notification
 */
 exports.update = function(req, res) {

 };
/**
 * Delete an Notification
 */
 exports.delete = function(req, res) {

 };

/**
 * List of Notifications
 */
 exports.list = function(req, res, next) {

 	var dismissedNotifs = [];
 	console.log('Users uname is : '+ req.user.username);
 	User.findOne({'username': req.user.username}, 'dismissedNotificationIds',function (err, notifications) {
 		if (err) {
 			return next(err);
 		}
 		if(notifications !== null){
 			dismissedNotifs = notifications.dismissedNotificationIds;
 			console.log(dismissedNotifs);
 		}

 		Notification.find({$and:[{$or:[{'startDate':{$lte:new Date ()}},{'startDate':null}]},{$or:[{'endDate':{$gte:new Date ()}},{'endDate':null}]},{'_id':{$nin:dismissedNotifs}}]},function (err, notifications) {
 			if (err) {
 				return next(err);
 			}
 			var notificationResult = [];

 			_.forEach (notifications, function (notification){

 				notificationResult.push ({
 					Id: notification._id,
 					title: notification.title,
 					description: notification.description,
 					links: notification.link,
 					startDate: notification.startDate,
 					endDate: notification.endDate
 				});

 			});
 			console.log(notifications);
 			console.log('EXPORTS');
 			return res.json(200, notificationResult);
 		});
 	});
 };

 //db.notifications.find({$and:[{$or:[{'startDate':{$lte:new Date ()}},{'startDate':null}]},{$or:[{'endDate':{$gte:new Date ()}},{'endDate':null}]},{"_id":{$nin:[ObjectId("53ed0d34337119bc1a922fdd")]}}]});













