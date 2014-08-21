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

		$scope.fetchBasicWorkerInfoForManager = function (){
			console.log('in employee controller method');
			teamFactory.fetchBasicWorkerInfoForManager().then(
				function(event){
					$scope.emps = event;
					employees = event;
				});

		};

		$scope.fetchBasicWorkerInfoForManager(); 


		$scope.$watch('emps', function (newValue) {
        	if (newValue) teamFactory.setWorkers(newValue);
    	});
	}
]);