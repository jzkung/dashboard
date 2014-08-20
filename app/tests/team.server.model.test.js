'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
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
 		it('should contain name field', function(done){
 			request.get('http://localhost:3000/api/teams/getInfoFromServer')
 			.end(function(response){
 				response.body.should.have.property('name');
 			});
 			done();
 		});
 		it('should contain title field', function(done){
 			request.get('http://localhost:3000/api/teams/getInfoFromServer')
 			.end(function(response){
 				response.body.should.have.property('title');
 			});
 			done();
 		});
 		it('should contain birthday field', function(done){
 			request.get('http://localhost:3000/api/teams/getInfoFromServer')
 			.end(function(response){
 				response.body.should.have.property('birthday');
 			});
 			done();
 		});
 		it('should contain hire date field', function(done){
 			request.get('http://localhost:3000/api/teams/getInfoFromServer')
 			.end(function(response){
 				response.body.should.have.property('hireDate');
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
	})

	afterEach(function(done) { 
		Team.remove().exec();
		
		done();
	});
});