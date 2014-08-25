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
 exports.create = function(req, res, next) {

 if(!req.body.title){
 		return res.json(400, {error: 'Title field is not entered'});
 	}

 	console.log(req.body.title);

 	var notification = new Notification({
 		title: req.body.title,
 		description: req.body.description,
 		startDate: req.body.startDate,
 		endDate: req.body.endDate,
 		userGroups: req.body.userGroups//req.userGroups
 	});

 	notification.save(function (err){
 		if(err) {
 			return next(err);
 		}

 		return res.json(200, notification);
 	});
 };

/**
 * Show the current Notification
 */
 exports.read = function(req, res) {

 };
/**
 * Update a Notification
 */
 exports.update = function(req, res, next) {
 	var conditions = {title: req.body.title};
 	var update = {$set :{ title: req.body.title,
 		link: req.body.link, 
 		description: req.body.description,
 		startDate: req.body.startDate,
 		endDate: req.body.endDate,
 		userGroups: req.body.userGroups}};
 	// var options = { multi: false };

 		Notification.update(conditions, update, function(err, notification){
 		if(err) {
 			return next(err);
 		}
 		return res.json(200, 'The notification has been updated');

 		});
 	};
/**
 * Delete an Notification
 */
 exports.delete = function(req, res, next) {

 	if(!req.body.notificationId){
 		return res.json(400, {error: 'Notification Id is missing'});
 	}

	Notification.remove({'_id': req.body.notificationId}, function(err){

		if(err) {
 			return next(err);
 		}
 		return res.json(200, 'The notification has been deleted');
	});
 };

/**
 * List of Notifications
 */
 exports.list = function(req, res, next) {

 	var dismissedNotifs = [];
 	//console.log('Users uname is : '+ req.user.username);
 	// req.body.username - postman test
 	User.findOne({'username': req.body.username}, 'dismissedNotificationIds',function (err, notifications) {
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













