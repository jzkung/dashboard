'use strict';

var toolbox = [
	{
		category: 'Daily',
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

angular.module('tools').controller('ToolsController', ['$scope', 'Tools',
	function($scope, Tools) {
		$scope.widget = {
			title: 'My Tools'
		};
		this.toolbox = toolbox;

		$scope.getAllTools = function (){
			Tools.getAllTools().then(
				function(event){
					console.log(event);
				});
		};

		$scope.getAllTools();
	}
]);