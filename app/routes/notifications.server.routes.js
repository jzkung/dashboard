'use strict';

module.exports = function(app) {

	var notifications = require('../../app/controllers/notifications');
	app.route('/api/notifications')    
	.get(notifications.list)                //  List all notifications for the logged in user
	.post(notifications.create);		    //	Create a notification

	app.route('/api/notifications/:id')      
	.get(notifications.notificationById)	//  Get notification by notification id
	.delete(notifications.deleteById)       // 	Delete notification by notification id 
	.put(notifications.update);				//	Update notification by notification id 
};