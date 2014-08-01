'use strict';

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
	}
];

angular.module('team').controller('TeamBirthdayController', ['$scope', '$animate',
	function($scope, $animate) {
		this.birthdays = birthdays;
	}
]);