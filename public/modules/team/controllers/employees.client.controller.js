'use strict';

angular.module('team').controller('TeamEmployeesController', ['$scope', 'teamFactory',
	function($scope, teamFactory) {

		var employees = [];
		$scope.emps = employees;

		var initEmployees = 2;
		$scope.employeesToShow = initEmployees;
		$scope.hasMoreToShow = function() {
			return $scope.employeesToShow < employees.length;
		};
		$scope.showAll = function() {
			$scope.employeesToShow = employees.length;
		};
		$scope.hideSome = function() {
			$scope.employeesToShow = initEmployees;
		};
		$scope.checkIfShow = function(index) {
			return index < $scope.employeesToShow;
		};

		$scope.fetchBasicWorkerInfoForManager = function (managerName){
			var m = [];
			console.log('in controller method');
			teamFactory.fetchBasicWorkerInfoForManager(managerName).then(
				function(event){
					console.log('in controller method - inside callback function');
					m = event;
					$scope.emps = m;
					employees = m;
					console.log($scope.emps);
				});

		};

		/* TODO : use logged in user name as parameter */
		$scope.fetchBasicWorkerInfoForManager('nverma'); 
	}
]);