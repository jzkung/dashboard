'use strict';

angular.module('core').controller('TabController', ['$scope',
	function($scope) {
		this.tab = 1;

		this.setTab = function(tab) {
			this.tab = tab;
		};

		this.isSet = function(tab) {
			return this.tab === tab;
		};
	}
]);