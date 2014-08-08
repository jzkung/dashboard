'use strict';

module.exports = function(app) {

	var tools = require('../../app/controllers/tools');
	app.route('/api/tools').get(tools.list);
};