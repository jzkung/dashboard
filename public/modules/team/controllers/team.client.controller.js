'use strict';

angular.module('team').controller('TeamController', ['$scope', '$animate',
	function($scope, $animate) {
		$animate.enabled(false);
		$scope.widget = {
			title: 'My Team'
		};
		$scope.myInterval = 5000;
	}
]);