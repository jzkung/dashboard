'use strict';

angular.module('team').directive('teamBirthdays', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/team/views/team-birthdays.client.view.html'
		};
	}
]);