'use strict';

var tools = [
	{
		category: 'Daily',
		users: [
			{ group: 'workers' }
		],
		links: [
			{
				name: 'PrimeTime',
				description: 'a place to manage your timesheet!',
				url: 'http://www.primetime.com'
			},
			{
				name: 'Workday',
				description: 'a place to look at your team and stuff!',
				url: 'http://www.workday.com'
			},
			{
				name: 'Yelp',
				description: 'a place to look for good foods!',
				url: 'http://www.yelp.com'
			}
		]
	},
	{
		category: 'Miscellaneous',
		users: [
			{ group: 'admin' },
			{ group: 'hr' }
		],
		links: [
			{
				name: 'HR Insight',
				description: 'a place to go when you have questions!',
				url: 'http://insight.intuit.com'
			},
			{
				name: 'Onboarding',
				description: 'the place you went to onboard and stuff!',
				url: 'http://www.intuit.com'
			}
		]
	}
];

angular.module('admin-tools').controller('AdminToolsController', ['$scope',
	function($scope) {
		this.tools = tools;
	}
]);