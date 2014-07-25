'use strict';

angular.module('tools').directive('tools', [
	function() {
		return {
			templateUrl: 'modules/tools/views/tools.client.view.html',
			restrict: 'E'
		};
	}
]);