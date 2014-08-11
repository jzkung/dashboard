'use strict';

//Setting up route
angular.module('control-panel').config(['$stateProvider',
	function($stateProvider) {
		// Control panel state routing
		$stateProvider.
		state('control-panel', {
			url: '/control-panel',
			templateUrl: 'modules/control-panel/views/control-panel.client.view.html'
		}).
		state('widget', {
			url: '/widget',
			templateUrl: 'modules/control-panel/views/widget.client.view.html'
		});
	}
]);