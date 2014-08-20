'use strict';

module.exports = function(app) {

	var tools = require('../../app/controllers/tools');
	app.route('/api/tools')
	.get(tools.list)
	.post(tools.create);

	app.route('/api/addLink/:category')
	.put(tools.addLink);

	app.route('/api/addUsergroup/:category')
	.put(tools.addUsergroup);

	app.route('/api/tool/:category')
	.get(tools.getTool)
	.delete(tools.delete);
};