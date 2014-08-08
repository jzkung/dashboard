'use strict';

/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
 Tool = mongoose.model('Tool'),
 Usergroup = mongoose.model('Usergroup'),
 Category = mongoose.model('Category'),
 _ = require('lodash');

/**
 * Create a Tool
 */
 exports.create = function(req, res) {

 };

/**
 * Show the current Tool
 */
 exports.read = function(req, res) {

 };

/**
 * Update a Tool
 */
 exports.update = function(req, res) {

 };

/**
 * Delete an Tool
 */
 exports.delete = function(req, res) {

 };

/**
 * List of Tools
 */
 exports.list = function(req, res, next) {
 	Tool.find(function (err, tools) {
 		if (err) {
 			return next(err);
 		}

 		return res.json(200, tools);
 	});
 };

 exports.listForUser = function(req, res, next) {
 	var user = req.params.user;
 	/* TODO: get this user's user groups from which schema? */
 	var userGroupName = 'admin';

  //Search usergroup collection for this user group name and get the _id field. 
  Usergroup.find({name:userGroupName}, '_id', function (err, userGroupID){
  	var query = {
  		userGroups: userGroupID
  	};
  	// Search categories collection for documents that have this user id
  	Tool.find(query, function (err, tools) {
  		if (err) {
  			return next(err);
  		}

  		return res.json(200, tools);
  	});
  });




};