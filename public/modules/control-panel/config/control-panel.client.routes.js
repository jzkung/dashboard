'use strict';

//Setting up route
angular.module('control-panel').config(['$stateProvider',
	function($stateProvider) {
		// Control panel state routing
		$stateProvider.
		state('widget', {
			url: '/widget',
			templateUrl: 'modules/control-panel/views/widget.client.view.html'
		});
	}
]);