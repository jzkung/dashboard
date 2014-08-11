'use strict';

//Setting up route
angular.module('admin-tools').config(['$stateProvider',
	function($stateProvider) {
		// Admin tools state routing
		$stateProvider.
		state('admin-tools-edit-category', {
			url: '/admin-tools-edit-category',
			templateUrl: 'modules/admin-tools/views/admin-tools-edit-category.client.view.html'
		}).
		state('admin-tools', {
			url: '/admin-tools',
			templateUrl: 'modules/admin-tools/views/admin-tools.client.view.html'
		});
	}
]);