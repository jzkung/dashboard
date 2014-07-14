'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Coffee = mongoose.model('Coffee'),
    _ = require('lodash');

/**
 * Create new coffee
 */
exports.createCoffee = function (req, res, next) {
  // Init Variables

  var coffee = new Coffee(req.body);
  coffee.save(function (err) {
    if (err) {
      return next(err);
    }

    return res.json(200, coffee);
  });
};

/**
 * Get all coffees
 */
exports.getAllCoffees = function (req, res, next) {
  Coffee.find(function (err, coffees) {
    if (err) {
      return next(err);
    }

    return res.json(200, coffees);
  });
};

/**
 * Get coffee by ID
 */
exports.getCoffee = function (req, res, next) {
  // Init Variables
  var id = req.params.id;

  Coffee.findById(id, function (err, coffee) {
    if (err) {
      return next(err);
    }

    return res.json(200, coffee);
  });
};

/**
 * Update coffee by ID
 */
exports.updateCoffee = function (req, res, next) {
  // Init Variables
  var id = req.params.id;
  var body = req.body;

  Coffee.findById(id, function (err, coffee) {
    if (err) {
      return next(err);
    }

    // loop through each key/value pair
    _.each(body, function (value, key) {
      coffee[key] = value;
    });

    coffee.save(function (err) {
      if (err) {
        return next(err);
      }

      return res.json(200, coffee);
    });
  });
};

/**
 * Delete coffee by ID
 */
exports.deleteCoffee = function (req, res, next) {
  // Init Variables
  var id = req.params.id;

  Coffee.findByIdAndRemove(id, function (err, coffee) {
    if (err) {
      return next(err);
    }

    return res.json(200, coffee);
  });
};