'use strict';

/**
 * Module dependencies.
 */

module.exports = function(app) {
	// User Routes
	var teams = require('../../app/controllers/teams');
	app.route('/api/teams/getInfoFromServer').get(teams.getInfoFromServer);
};