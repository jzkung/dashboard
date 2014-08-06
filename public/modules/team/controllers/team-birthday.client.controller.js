'use strict';

angular.module('team').controller('TeamBirthdayController', ['$scope', '$animate','teamFactory', 'filterFilter',
	function($scope, $animate, teamFactory, filterFilter) {
		$scope.birthdays = [];

		$scope.fetchBasicWorkerInfoForManager = function (managerName){
			teamFactory.fetchBasicWorkerInfoForManager(managerName).then(
				function(event){
					console.log('in controller method - inside callback function');
					$scope.birthdays = filterFilter(event, {isBirthdayToday : true});
				});
		};

		/* TODO : use logged in user name as parameter */
		$scope.fetchBasicWorkerInfoForManager('nverma');


	}
]);