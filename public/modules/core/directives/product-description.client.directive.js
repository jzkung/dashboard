'use strict';

angular.module('core').directive('productDescription', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/core/views/product-description.client.view.html'
		};
	}
]);