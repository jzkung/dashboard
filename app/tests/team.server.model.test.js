'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Team = mongoose.model('Team');

/**
 * Globals
 */

  var request = require('supertest')
 , express = require('express');

 var app = express();

var user, team;

/**
 * Unit tests
 */
describe('Team Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			team = new Team({
				// Add model fields
				// ...
			});

			done();
		});
	});

	app.get('/api/teams/getInfoFromServer/testManager', function(req, res){
 		var workerInfo = [];
 		workerInfo.push ({
				name: 'shweta',
				title: 'a',
				birthday: new Date('1988/08/12'),
				hireDate: new Date('2012/08/13'),
				link: 'http://www.workday.com',
				image: 'modules/team/img/user-icon.png',
				isBirthdayToday: true, 
				isAnniversaryToday: true,
				numAnniversary: 2
		});
		return res.json(200, workerInfo);
 	});

	describe('Get team info for manager', function(){
 		it('should respond with json', function(done){
 			request(app)
 			.get('/api/teams/getInfoFromServer/testManager')
 			.set('Accept', 'application/json')
 			.expect('Content-Type', /json/)
 			.expect(200, done);
 		});
 	});

 	describe('Get team info without passing parameter', function(){
 		it('should respond with error', function(done){
 			request(app)
 			.get('/api/teams/getInfoFromServer')
 			.set('Accept', 'application/json')
 			.expect('Content-Type', /html/)
 			.expect(404, done);
 		});
 	});

	afterEach(function(done) { 
		Team.remove().exec();
		User.remove().exec();
		
		done();
	});
});