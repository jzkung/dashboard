'use strict';

module.exports = function(app) {

	var notifications = require('../../app/controllers/notifications');
	app.route('/api/notifications').get(notifications.list);
};