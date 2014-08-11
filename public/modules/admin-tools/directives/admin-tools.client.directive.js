'use strict';

angular.module('admin-tools').directive('adminTools', [
	function() {
		return {
			templateUrl: 'modules/admin-tools/views/admin-tools.client.view.html',
			restrict: 'E'
		};
	}
]);