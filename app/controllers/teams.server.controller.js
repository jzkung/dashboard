'use strict';

/**
 * Module dependencies.
 */
 var request = require('superagent');
//var agent = superagent.agent();

var checkBirthdayToday = function (birth_date){
	if (!birth_date){ //if birth date field is null
		return false;
	}
	else {
		var bd = new Date(birth_date.replace('-','/'));
		var today = new Date();
		if (bd.getMonth() === today.getMonth() && bd.getDate() === today.getDate()) {
			return true;
		}
		else {
			return false;
		}
	}
};

var checkAnniversaryToday = function (hire_date){
	if (!hire_date){ //if hire_date field is null
		return false;
	}
	else {
		var bd = new Date(hire_date.replace('-','/'));
		var today = new Date();
		if (bd.getMonth() === today.getMonth() && bd.getDate() === today.getDate()) {
			return true;
		}
		else {
			return false;
		}
	}
};

var calculateNumAnniversary = function (hire_date){
	if (!hire_date){
		return 0;
	}
	else {
		if (checkAnniversaryToday){
			var hd = new Date(hire_date.replace('-','/'));
			var today = new Date();
			return today.getFullYear() - hd.getFullYear();
		}
		else {
			return 0;
		}
	}
};

exports.getInfoFromServer = function (req, res){
	var managerId = req.params.managerId;
	var url = 'http://localhost:8080/workerService/ws/api/v1/workers/' + managerId + '/directReports';
	request
	.get(url)
	.end(function(response){
		console.log('server method');
		var workerInfo = [];
		if (response.error) {
			console.log('error is ' + response.error.message);
			return res.json(500, response.error.message);
		} 
		else {
			console.log('status is  ' + response.status );
			var workerList = response.body.workers;
			for (var i = 0; i < 10; i++){
				var data = workerList[i];				
				workerInfo.push ({
					name: data.WORKER_NAMES[0].FIRST_NAME + ' ' + data.WORKER_NAMES[0].LAST_NAME,
					title: data.BUSINESS_TITLE,
					birthday: data.BIRTH_DATE,
					hireDate: data.HIRE_DATE,
					link: 'http://www.workday.com',
					image: 'modules/team/img/jessicar.png', //TODO: modify image field
					isBirthdayToday: checkBirthdayToday(data.BIRTH_DATE), 
					isAnniversaryToday: checkAnniversaryToday(data.HIRE_DATE),
					numAnniversary: calculateNumAnniversary(data.HIRE_DATE)
				});
			}
			/* adding data for testing */
			workerInfo.push ({
				name: 'shweta',
				title: 'a',
				birthday: '1988-08-05',
				hireDate: '2001-08-05',
				link: 'http://www.workday.com',
				image: 'modules/team/img/jessicar.png', //TODO: modify image field
				isBirthdayToday: checkBirthdayToday('1988-08-05'), 
				isAnniversaryToday: checkAnniversaryToday('2001-08-05'),
				numAnniversary: calculateNumAnniversary('2001-08-05')
			});
			workerInfo.push ({
				name: 'anagha',
				title: 'a',
				birthday: '2000-08-05',
				hireDate: '2001-08-05',
				link: 'http://www.workday.com',
				image: 'modules/team/img/jessicar.png', //TODO: modify image field
				isBirthdayToday: checkBirthdayToday('1988-08-05'), 
				isAnniversaryToday: checkAnniversaryToday('2001-08-07'),
				numAnniversary: calculateNumAnniversary('2001-08-05')
			});
			/* end of test data */
		}
		//return res.json (200, response.body);
		return res.json(200, workerInfo);
	});
};
