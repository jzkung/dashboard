'use strict';

var employees = [
	{
		name: "Jessica Kung",
		title: "Software Engineer Intern",
		birthday: "10/02/1992",
		hireDate: "6/23/2014"
	},
	{
		name: "Jessica Kung",
		title: "Software Engineer Intern",
		birthday: "10/02/1992",
		hireDate: "6/23/2014"
	},
	{
		name: "Jessica Kung",
		title: "Software Engineer Intern",
		birthday: "10/02/1992",
		hireDate: "6/23/2014"
	}
];

angular.module('team').controller('TeamController', ['$scope',
	function($scope) {
		this.employees = employees;
	}
]);