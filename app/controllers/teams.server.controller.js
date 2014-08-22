'use strict';

/**
 * Module dependencies.
 */
 var request = require('superagent');
 var moment = require('moment');
 var  _ = require('lodash');
 var http = require('http');


 var checkBirthdayToday = function (birth_date){
  if (!birth_date){ //if birth date field is null
    return false;
  }
  else {
    var bd = moment(birth_date);
    var today = moment();
    if (bd.month() === today.month() && bd.date() === today.date()){
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
    var hd = moment(hire_date);
    var today = moment();
    if (hd.month() === today.month() && hd.date() === today.date()){
      return true;
    }
    else {
      return false;
    }
  }
};

var addOrdinalSuffix = function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + 'st';
    }
    if (j === 2 && k !== 12) {
        return i + 'nd';
    }
    if (j === 3 && k !== 13) {
        return i + 'rd';
    }
    return i + 'th';
};

var calculateNumAnniversary = function (hire_date){
  if (!hire_date){
    return 0;
  }
  else {
    if (checkAnniversaryToday){
      var hd  = moment(hire_date);
      var today = moment();
      return addOrdinalSuffix(today.diff(hd,'years'));
    }
    else {
      return 0;
    }
  }
};

var getISOStringFromDate = function (date_info){

  if (date_info){
    return moment(date_info).toISOString();
  }
  else {
    return 'Unknown';
  }
};

var getWorkerInfo = function (networkId, req, res){
  var url = 'http://pqalwesas301:8080/workerService/ws/api/v1/workers/' + networkId + '/directReports';

  request
  .get(url)
  .on('error', function(error){
    console.log(error);
    return res.json(500, error);
  })
  .end(function(response){
    var workerInfo = [];
    if (response.error) {
      console.log('error is ' + response.error.message);
      return res.json(500, response.error.message);
    }
    else if (response.body.workers.length>0) {
      console.log('status is ' + response.status );
      var workerList = response.body.workers;
      _.forEach(workerList, function(data){
        workerInfo.push ({
          name: data.WORKER_NAMES[0].FIRST_NAME + ' ' + data.WORKER_NAMES[0].LAST_NAME,
          title: data.BUSINESS_TITLE,
          birthday: getISOStringFromDate(data.BIRTH_DATE),
          hireDate: getISOStringFromDate(data.HIRE_DATE),
          link: 'http://www.workday.com',
          image: 'modules/team/img/user-icon.png',
          isBirthdayToday: checkBirthdayToday(data.BIRTH_DATE),
          isAnniversaryToday: checkAnniversaryToday(data.HIRE_DATE),
          numAnniversary: calculateNumAnniversary(data.HIRE_DATE)
        });
      });

      /* adding data for testing */
      workerInfo.push ({
        name: 'shweta',
        title: 'a',
        birthday: getISOStringFromDate('1988-08-12'),
        hireDate: getISOStringFromDate('2001-08-07'),
        link: 'http://www.workday.com',
        image: 'modules/team/img/user-icon.png',
        isBirthdayToday: checkBirthdayToday('1988-08-21'),
        isAnniversaryToday: checkAnniversaryToday('2001-08-21'),
        numAnniversary: calculateNumAnniversary('2001-08-12')
      });
      workerInfo.push ({
        name: 'anagha',
        title: 'a',
        birthday: getISOStringFromDate('1988-08-05'),
        hireDate: getISOStringFromDate('2001-08-07'),
        link: 'http://www.workday.com',
        image: 'modules/team/img/user-icon.png',
        isBirthdayToday: checkBirthdayToday('1988-08-05'),
        isAnniversaryToday: checkAnniversaryToday('2001-08-07'),
        numAnniversary: calculateNumAnniversary('2001-08-07')
      });
      /* end of test data */

      return res.json(200, workerInfo);
    }
    else {
      return res.json(204, {message: 'No data'});
    }


  });
};

exports.getInfoFromServer = function (req, res){
  var url = 'http://pqalwesas301:8080/workerService/ws/api/v1/workers/search?firstName=' + req.user.firstName + '&lastName=' + req.user.lastName;

  var options = {
    hostname: 'pqalwesas301',
    port: 8080,
    path: '/workerService/ws/api/v1/workers/search?firstName=' + req.user.firstName + '&lastName=' + req.user.lastName,
    method: 'GET'
  };

  var request = http.request(options, function(response) {
    response.setEncoding('utf8');

    var jsonStr = '';

    response.on('data', function (chunk) {
      jsonStr += chunk;
    });

    response.on('end', function () {
      var json = JSON.parse(jsonStr);

      if (!json.workers) {
        return res.json(204, 'No data found for this user');
      }
      else if (json.workers.length > 0){
        var networkId = json.workers[0].NETWORK_ID;
        getWorkerInfo(networkId, req, res);
      }
      else {
        return res.json(204, 'No data');
      }
    });
  });

  request.on('error', function(e) {
    console.log('problem with request: ' + e.message);
    return res.json(500, e.message);
  });

  // write data to request body
  request.end();
};
