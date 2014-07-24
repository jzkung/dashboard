'use strict';

//Setting up route
angular.module('team').config(['$stateProvider',
	function($stateProvider) {
		// Team state routing
		$stateProvider.
		state('team', {
			url: '/team',
			templateUrl: 'modules/team/views/team.client.view.html'
		}).
		state('employees', {
			url: '/employees',
			templateUrl: 'modules/team/views/employees.client.view.html'
		}).
		state('team-anniversary', {
			url: '/team-anniversary',
			templateUrl: 'modules/team/views/team-anniversary.client.view.html'
		}).
		state('team-birthday', {
			url: '/team-birthday',
			templateUrl: 'modules/team/views/team-birthday.client.view.html'
		});
	}
]);