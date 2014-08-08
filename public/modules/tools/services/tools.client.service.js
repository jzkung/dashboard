'use strict';

angular.module('tools').factory('Tools', ['$http','$log','$q',
	function($http, $log, $q) {

		return {
			getAllTools: function() {
				var deferred = $q.defer();
				var url = '/api/tools';
				$http ({
					method: 'GET',
					url: url
				})
				.success(function(data, status, headers, config){
					console.log('success');
					$log.info(data, status, headers, config);
					deferred.resolve(data);
				})
				.error(function(data, status, headers, config){
					console.log('error');
					$log.debug(data, status, headers, config);
				});
				return deferred.promise;
			}
		};
	}
	]);