'use strict';

angular.module('team').directive('teamEmployees', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/team/views/team-employees.client.view.html'
		};
	}
]);