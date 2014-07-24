'use strict';

//Setting up route
angular.module('notifications').config(['$stateProvider',
	function($stateProvider) {
		// Notifications state routing
		$stateProvider.
		state('notifications', {
			url: '/notifications',
			templateUrl: 'modules/notifications/views/notifications.client.view.html'
		});
	}
]);