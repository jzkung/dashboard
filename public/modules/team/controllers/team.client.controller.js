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

var birthdays = [
	{
		name: 'Jessica Kung',
		age: '22',
		image: 'modules/team/img/jessicar.png'
	},
	{
		name: 'Kevin Lu',
		age: '21',
		image: 'modules/team/img/kevin.png'
	},
	{
		name: 'Kevin Lu',
		age: '21',
		image: 'modules/team/img/kevin.png'
	}
];

var anniversaries = [];

angular.module('team').controller('TeamController', ['$scope', '$animate',
	function($scope, $animate) {
		$animate.enabled(false);
		$scope.widget = {
			title: 'My Team'
		};
		$scope.myInterval = -5000;
		this.employees = employees;
		this.birthdays = birthdays;
	}
]);