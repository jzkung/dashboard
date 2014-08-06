'use strict';

angular.module('team').controller('TeamBirthdayController', ['$scope', '$animate','teamFactory', 'filterFilter',
	function($scope, $animate, teamFactory, filterFilter) {
		$scope.birthdays = [];

		$scope.$watch(function () { return teamFactory.getWorkers(); }, function (newValue) {
        	if (newValue) {
        		var birthdays = newValue;
        		$scope.birthdays = filterFilter(birthdays, {isBirthdayToday : true});
        	}
    	});


	}
]);