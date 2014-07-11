'use strict';

angular.module('core').directive('productTitle', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/core/views/product-title.client.view.html'
		};
	}
]);