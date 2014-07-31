'use strict';

angular.module('team').directive('teamAnniversaries', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/team/views/team-anniversaries.client.view.html'
		};
	}
]);