/**
 * Created by skumar34 on 8/4/14.
 */
/********** UNUSED FILE - TO BE DELETED ***********/


 'use strict';


 angular.module('team').factory('teamEmpFactory',
 	function($http, $log, $q){
	return {
		fetchBasicWorkerInfoForManager: function (managerName) {
			var deferred = $q.defer();
			var url = '/teams/getInfoFromServer/'+ managerName;
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
 });