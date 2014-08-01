'use strict';

var anniversaries = [
	{
		name: 'Sara Hua',
		year: '2',
		image: 'modules/team/img/sara.png'
	}
];

angular.module('team').controller('TeamAnniversaryController', ['$scope', '$animate',
	function($scope, $animate) {
		this.anniversaries = anniversaries;
	}
]);