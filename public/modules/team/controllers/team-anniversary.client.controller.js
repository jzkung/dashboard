'use strict';

// var anniversaries = [
// 	{
// 		name: 'Sara Hua',
// 		year: '2',
// 		image: 'modules/team/img/sara.png'
// 	}
// ];

angular.module('team').controller('TeamAnniversaryController', ['$scope', '$animate','teamFactory', 'filterFilter',
	function($scope, $animate, teamFactory, filterFilter) {
		$scope.anniversaries = [];

		$scope.fetchBasicWorkerInfoForManager = function (managerName){
			teamFactory.fetchBasicWorkerInfoForManager(managerName).then(
				function(event){
					console.log('in anniversary controller method - inside callback function');
					$scope.anniversaries = filterFilter(event, {isAnniversaryToday : true});
				});
		};

		/* TODO : use logged in user name as parameter */
		$scope.fetchBasicWorkerInfoForManager('nverma');
	}
]);