'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash'),
    UserGroup = mongoose.model('Usergroup');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
  var message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Username already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  return message;
};

/**
 * Create a User group
 */
exports.create = function(req, res) {
  var user = req.user;

  if (user) {
    // create new user group & save
    var userGroup = new UserGroup(req.body);

    userGroup.save(function (err) {
      if (err) {
        return res.json(400, {
          message: getErrorMessage(err)
        });
      }

      return res.json(200, userGroup);
    });
  }
  else { // must be logged in
    return res.json(401, {
      message: 'User is not signed in'
    });
  }
};

/**
 * Show the current User group
 */
exports.read = function(req, res) {
  var user = req.user;
  var id = req.params.id;

  if (user) {
    // find by id & return
    UserGroup.findById(id, function (err, userGroup) {
      if (err) {
        return res.json(400, {
          message: getErrorMessage(err)
        });
      }

      return res.json(200, userGroup);
    });
  }
  else { // must be logged in
    return res.json(401, {
      message: 'User is not signed in'
    });
  }
};

/**
 * Update a User group
 */
exports.update = function(req, res) {
  var user = req.user;
  var id = req.params.id;

  if (user) {
    // find by id & return
    UserGroup.findById(id, function (err, userGroup) {
      if (err) {
        return res.json(400, {
          message: getErrorMessage(err)
        });
      }

      // merge the data
      userGroup = _.extend(userGroup, req.body);

      // save user group
      userGroup.save(function (err) {
        if (err) {
          return res.json(400, {
            message: getErrorMessage(err)
          });
        }

        return res.json(200, userGroup);
      });
    });
  }
  else { // must be logged in
    return res.json(401, {
      message: 'User is not signed in'
    });
  }
};

/**
 * Delete an User group
 */
exports.delete = function(req, res) {
  var user = req.user;
  var id = req.params.id;

  if (user) {
    // find by id & return
    UserGroup.findByIdAndRemove(id, function (err) {
      if (err) {
        return res.json(400, {
          message: getErrorMessage(err)
        });
      }

      return res.json(200, {});
    });
  }
  else { // must be logged in
    return res.json(401, {
      message: 'User is not signed in'
    });
  }
};

/**
 * List of User groups
 */
exports.list = function(req, res) {
  var user = req.user;

  if (user) {
    // find by id & return
    UserGroup.find(function (err, userGroups) {
      if (err) {
        return res.json(400, {
          message: getErrorMessage(err)
        });
      }

      return res.json(200, userGroups);
    });
  }
  else { // must be logged in
    return res.json(401, {
      message: 'User is not signed in'
    });
  }
};