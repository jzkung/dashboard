'use strict';

angular.module('notifications').factory('Notifications', ['$http','$log','$q',
	function($http, $log, $q) {

		return {
			getAllNotifications: function() {
				var deferred = $q.defer();
				var url = '/api/notifications';
				
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
			},

			dismissNotification: function(notificationId) {
				var deferred = $q.defer();
				var url = '/users/dismissNotification/?id='+ notificationId;
				//var url = '/api/tools';

				$http ({
					method: 'PUT', 
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



//db.notifications.find({'startDate':{$lte:new Date ()}, 'endDate':{$gte:new Date()}})