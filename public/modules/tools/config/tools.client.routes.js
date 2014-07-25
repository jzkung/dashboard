'use strict';

//Setting up route
angular.module('tools').config(['$stateProvider',
	function($stateProvider) {
		// Tools state routing
		$stateProvider.
		state('tools', {
			url: '/tools',
			templateUrl: 'modules/tools/views/tools.client.view.html'
		});
	}
]);