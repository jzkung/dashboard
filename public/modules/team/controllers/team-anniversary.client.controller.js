'use strict';

var anniversaries = [
	{
		first_name: 'Sara',
		last_name: 'Hua',
		year: '2nd',
		image: 'modules/team/img/sara.png'
	}
];

angular.module('team').controller('TeamAnniversaryController', ['$scope', '$animate',
	function($scope, $animate) {
		this.anniversaries = anniversaries;
	}
]);