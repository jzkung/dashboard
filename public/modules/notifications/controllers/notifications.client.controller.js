'use strict';

var alerts = [
	{
		title: 'Finish Performance Review',
		link: 'http://www.workday.com',
		dueDate: 'tomorrow'
	},
	{
		title: 'Submit fitness reimbursement',
		link: 'http://www.workday.com',
		dueDate: '7/28/2014'
	},
	{
		title: 'Scheduled maintenance',
		link: 'http://www.workday.com',
		dueDate: 'today'
	}
];

angular.module('notifications').controller('NotificationsController', ['$scope',
	function($scope) {
		$scope.widget = {
			title: 'My Notifications'
		};
		this.alerts = alerts;
	}
]);