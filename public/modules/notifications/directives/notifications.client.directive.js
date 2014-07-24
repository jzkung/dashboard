'use strict';

angular.module('notifications').directive('notifications', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/notifications/views/notifications.client.view.html'
		};
	}
]);