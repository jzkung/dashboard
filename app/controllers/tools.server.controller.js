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
exports.create = function(req, res, next) {

	if (!req.body.category){
		return res.json(400, {error: 'Category field not entered'});
	}

	var tool = new Tool({
		category: req.body.category,
		userGroups: req.body.userGroups,
		links: req.body.links
	});

	tool.save(function (err) {
		if (err) {
			return next(err);
		}

		return res.json(200, tool);
	});
};

/* Add new link under category*/
exports.addLink = function(req, res, next){
	var category = req.params.category;

	if (!req.body.links.name){
		return res.json(400, {error: 'Link Name field not entered'});
	}
	Tool.findOne({'category':category}, function(err, tool){
		if (err){
			return (next(err));
		}
		if (!tool){
			return res.json(204, {message: 'No data for this category'});
		}
		tool.links.push(req.body.links);
		tool.save(function(err){
			if (err){
				return next(err);
			}
			return res.json(200, tool);
		});
	});
};

/* Add new user group under category*/
exports.addUsergroup = function(req, res, next){
	var category = req.params.category;

	Tool.findOne({'category':category}, function(err, tool){
		if (err){
			return next(err);
		}
		if (!tool){
			return res.json(204, {message: 'No data for this category'});
		}
		tool.userGroups.push(req.body.userGroups);
		tool.save(function(err){
			if (err){
				return next(err);
			}

			return res.json(200, tool);
		});
	});
};

/**
* Get one tool
*/
exports.getTool = function(req, res, next) {
  var category = req.params.category;

  Tool.findOne({'category':category}, function (err, tool) {
    if (err) {
      return next(err);
    }
    return res.json(200, tool);
  });
};

/**
* Delete an Tool
*/
exports.delete = function(req, res, next) {
  var category = req.params.category;

  Tool.findOne({'category':category}, function (err, tool) {
    if (err) {
      return next(err);
    }
  }).remove(function(err){
  	return res.json(200);
  });
};

/**
* List of Tools
*/
exports.list = function(req, res, next) {
	Tool.find(function (err, tools) {
		if (err) {
			return next(err);
		}
		return res.json(200,tools);
	});
};