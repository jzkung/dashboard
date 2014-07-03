'use strict';

// Core module config
angular.module('core').run(['Menus',
	function(Menus) {
		Menus.addMenuItem('topbar', 'Contact', 'contact');
	}
]);