'use strict';

angular.module('team').controller('TeamAnniversaryController', ['$scope', '$animate','teamFactory', 'filterFilter',
	function($scope, $animate, teamFactory, filterFilter) {
		$scope.anniversaries = [];

		$scope.$watch(function () { return teamFactory.getWorkers(); }, function (newValue) {
        	if (newValue) {
        		var anniversaries = newValue;
        		$scope.anniversaries = filterFilter(anniversaries, {isAnniversaryToday : true});
        	}
    	});
    	
	}
]);