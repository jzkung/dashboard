'use strict';

angular.module('control-panel').controller('ControlpanelController', ['$scope','$http',
	function($scope,$http) {
		// Controlpanel controller logic
		// ...
		$scope.getUserName = function(){
			$http.get('/users/me').success(function(response) {
				//If successful we assign the response to the global user model
				$scope.myName = response.displayName;

			}).error(function(response) {
				$scope.error = response.message;
			});
		};
		$scope.getUserName();
	}
]);