'use strict';

angular.module('core').directive('productReviews', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/core/views/product-reviews.client.view.html'
		};
	}
]);