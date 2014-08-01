'use strict';

var employees = [
	{
		name: 'Jessica Kung',
		title: 'Software Engineer Intern',
		birthday: '10/02/1992',
		hireDate: '6/23/2014',
		link: 'http://www.workday.com',
		image: 'modules/team/img/jessicar.png'
	},
	{
		name: 'Sara Hua',
		title: 'HR Intern',
		birthday: '7/25/1992',
		hireDate: '7/28/2014',
		link: 'http://www.workday.com',
		image: 'modules/team/img/sara.png'
	},
	{
		name: 'Kevin Lu',
		title: 'Software Engineer Intern',
		birthday: '5/5/1993',
		hireDate: '6/16/2014',
		link: 'http://www.workday.com',
		image: 'modules/team/img/kevin.png'
	}
];

angular.module('team').controller('TeamEmployeesController', ['$scope',
	function($scope) {
		this.employees = employees;
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
		}
	}
]);