'use strict';

/**
 * Module dependencies.
 */

module.exports = function(app) {
	// User Routes
	var teams = require('../../app/controllers/teams');
	app.route('/teams/getInfoFromServer/:managerId').get(teams.getInfoFromServer);
};