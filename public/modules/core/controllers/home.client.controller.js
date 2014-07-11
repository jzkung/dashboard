'use strict';

var gems = [
	{
		name: 'Azurite',
		price: 2
	},
	{
		name: 'Bloodstone',
		price: 5
	}
];
angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		this.products = gems;
	}
]);