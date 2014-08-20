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

  var request = require('superagent');

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

		done();
	});

	describe('Get team info for manager', function(){
 		it('should respond with json', function(done){
 			request.get('http://localhost:3000/api/teams/getInfoFromServer')
			.end(function(response){
				response.status.should.equal(200);
				response.should.have.header('Content-Type','/json/');
			});
			done();
 		});
 	});

	describe('Get incorrect route', function(){
		it ('should respond with error', function(done){
			request.get('http://localhost:3000/api/teams/getTeamInfo')
			.end(function(response){
				response.status.should.equal(404);
			});
			done();
		});
	});

	afterEach(function(done) { 
		Team.remove().exec();
		User.remove().exec();
		
		done();
	});
});