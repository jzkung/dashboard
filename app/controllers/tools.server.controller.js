'use strict';

/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
 Tool = mongoose.model('Tool'),
 Usergroup = mongoose.model('Usergroup'),
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
		var toolResult = [];
		_.forEach (tools, function (tool){
			toolResult.push ({
				category: tool.category,
				links: tool.items
			});
		});
		return res.json(200, toolResult);
	});
 };