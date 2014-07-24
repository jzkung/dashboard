'use strict';

angular.module('team').directive('team', [
	function() {
		return {
			templateUrl: 'modules/team/views/team.client.view.html',
			restrict: 'E'
		};
	}
]);