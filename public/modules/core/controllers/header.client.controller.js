'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$http', '$location', 'Authentication', 'Menus',
	function($scope, $http, $location, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		$scope.signout = function(){
			console.log('Trying to signout');
			$http.get('/auth/signout').success(function(response) {
				//If successful we assign the response to the global user model
				console.log('Success while calling $scope.signout');
				
				$location.path('/signin');
			}).error(function(response) {
				console.log('Error while calling $scope.signout');
				$scope.error = response.message;
				
			});
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});


	}
]);