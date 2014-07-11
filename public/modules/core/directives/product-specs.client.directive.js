'use strict';

angular.module('core').directive('productSpecs', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/core/views/product-specs.client.view.html'
		};
	}
]);