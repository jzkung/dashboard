'use strict';

angular.module('core').controller('ReviewController', ['$scope',
	function() {
		this.review = [];

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = [];
		};
	}
]);