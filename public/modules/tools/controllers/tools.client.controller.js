'use strict';

angular.module('tools').controller('ToolsController', ['$scope', 'Tools',
	function($scope, Tools) {
		$scope.widget = {
			title: 'My Tools'
		};
		

		$scope.getAllTools = function (){
			Tools.getAllTools().then(
				function(event){
					console.log(event);
					$scope.toolbox = event;
				});
		};

		$scope.getAllTools();
	}
]);