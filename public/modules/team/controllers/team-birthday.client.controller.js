'use strict';

var birthdays = [
	{
		first_name: 'Jessica',
		last_name: 'Kung',
		age: '22nd',
		image: 'modules/team/img/jessicar.png'
	},
	{
		first_name: 'Kevin',
		last_name: 'Lu',
		age: '21st',
		image: 'modules/team/img/kevin.png'
	}
];

angular.module('team').controller('TeamBirthdayController', ['$scope', '$animate',
	function($scope, $animate) {
		this.birthdays = birthdays;
	}
]);