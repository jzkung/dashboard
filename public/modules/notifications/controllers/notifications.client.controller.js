'use strict';

var app = angular.module('notifications', []);


angular.module('notifications').filter('displayFilter', function() {
	return function(dateString) {
		if(dateString === null){
			dateString = '(no due date)';
			return dateString;
		}
		else{
			return moment(dateString).calendar();
		}
	};
}); 

angular.module('notifications').controller('NotificationsController', ['$scope', 'Notifications',
	function($scope, Notifications) {
		$scope.widget = {                        
			title: 'My Notifications'
		};

		$scope.getAllNotifications = function (){
			Notifications.getAllNotifications().then(
				function(event){
					$scope.notificationbox = event;
				});
		};
		
		$scope.dismissNotification = function (NotificationId){
			Notifications.dismissNotification(NotificationId).then(
				function(event){
					console.log('entered');
				});
			$scope.getAllNotifications();
		};
		
		$scope.getAllNotifications();

		// $scope.updateNotification = function (){
		// 	Notifications.updateNotification().then(
		// 		function(event){
		// 			console.log('entered');
		// 		});
		// };

	}]);

app.directive('ngConfirmClick', [
	function(){
		return {
			link: function (scope, element, attr) {
				var msg = attr.ngConfirmClick || 'Are you sure?';
				var clickAction = attr.confirmedClick;
				element.bind('click',function (event) {
					if ( window.confirm(msg) ) {
						scope.$eval(clickAction);
					}
				});
			}
		};
	}]);




		// var d = new Date();
		
		// var day = d.getDate() < 10 ? '0' + (d.getDate()+1) : (d.getDate()+1) ;
		// var month = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
		// var year = d.getFullYear();
		// $scope.dateToday = date.parse(year + '-' + month + '-' + day);



