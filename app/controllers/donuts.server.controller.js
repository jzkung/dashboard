'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Donut = mongoose.model('Donut'),
    _ = require('lodash');

/**
 * Create new donut
 */
exports.createDonut = function (req, res, next) {
  // Init Variables

  var donut = new Donut(req.body);
  donut.save(function (err) {
    if (err) {
      return next(err);
    }

    return res.json(200, donut);
  });
};

/**
 * Get all donuts
 */
exports.getAllDonuts = function (req, res, next) {
  Donut.find(function (err, donuts) {
    if (err) {
      return next(err);
    }

    return res.json(200, donuts);
  });
};

/**
 * Get donut by ID
 */
exports.getDonut = function (req, res, next) {
  // Init Variables
  var id = req.params.id;

  Donut.findById(id, function (err, donut) {
    if (err) {
      return next(err);
    }

    return res.json(200, donut);
  });
};

/**
 * Update donut by ID
 */
exports.updateDonut = function (req, res, next) {
  // Init Variables
  var id = req.params.id;
  var body = req.body;

  Donut.findById(id, function (err, donut) {
    if (err) {
      return next(err);
    }

    // loop through each key/value pair
    _.each(body, function (value, key) {
      donut[key] = value;
    });

    donut.save(function (err) {
      if (err) {
        return next(err);
      }

      return res.json(200, donut);
    });
  });
};

/**
 * Delete donut by ID
 */
exports.deleteDonut = function (req, res, next) {
  // Init Variables
  var id = req.params.id;

  Donut.findByIdAndRemove(id, function (err, donut) {
    if (err) {
      return next(err);
    }

    return res.json(200, donut);
  });
};