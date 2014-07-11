'use strict';

angular.module('core').directive('productTabs', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/core/views/product-tabs.client.view.html',
			controller: function() {
				this.tab = 1;

				this.setTab = function(setTab) {
					this.tab = setTab;
				};

				this.isSet = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'tab'
		};
	}
]);