'use strict';

angular.module('control-panel').directive('widget', [
	function() {
		return {
			templateUrl: 'modules/control-panel/views/widget.client.view.html',
			restrict: 'E',
			transclude: true
		};
	}
]);