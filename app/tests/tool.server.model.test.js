'use strict';

/**
 * Module dependencies.
 */
 var should = require('should'),
 mongoose = require('mongoose'),
 User = mongoose.model('User'),
 Tool = mongoose.model('Tool'),
 _ = require('lodash');

 var request = require('supertest')
 , express = require('express');

 var app = express();
/**
 * Globals
 */
 var user, tool;

/**
 * Unit tests
 */
 describe('Tool Model Unit Tests:', function() {
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
 			tool = new Tool({
 				category: 'Daily',
 				userGroups: ['hr','ebs'],
 				items: [
 				{
 					name: 'PrimeTime',
 					description: 'primetime',
 					url: 'http://www.primetime.com',
 					userGroups: ['emp']
 				},
 				{
 					name: 'Workday',
 					description: 'a place to look at your team and stuff!',
 					url: 'http://www.workday.com',
 					userGroups: ['emp']
 				},
 				{
 					name: 'Yelp',
 					description: 'a place to look for good foods!',
 					url: 'http://www.yelp.com',
 					userGroups: ['emp']
 				}
 				]
 			});

 			done();
 		});
 	});

 	describe('Method Save', function() {
 		it('should be able to save without problems', function(done) {
 			return tool.save(function(err) {
 				should.not.exist(err);
 				done();
 			});
 		});
 	});

 	app.get('/api/tools', function(req, res){
 		Tool.find(function (err, tools) {
 			if (err) {
 				return next(err);
 			}
 			var toolResult = [];
 			_.forEach (tools, function (tool){
 				toolResult.push ({
 					category: tool.category,
 					links: tool.items
 				});
 			});
 			return res.json(200, toolResult);
 		});
 	});

 	describe('GET /api/tools', function(){
 		it('should respond with json', function(done){
 			request(app)
 			.get('/api/tools')
 			.set('Accept', 'application/json')
 			.expect('Content-Type', /json/)
 			.expect(200, done);
 		});
 	});

 	describe('GET /api/toolsList', function(){
 		it('should respond with error', function(done){
 			request(app)
 			.get('/api/toolsList')
 			.set('Accept', 'application/json')
 			.expect('Content-Type', /html/)
 			.expect(404, done);
 		});
 	});

 	afterEach(function(done) { 
 		Tool.remove().exec();
 		User.remove().exec();

 		done();
 	});
 });