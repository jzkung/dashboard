'use strict';

/**
 * Module dependencies.
 */
 var should = require('should'),
 mongoose = require('mongoose'),
 Tool = mongoose.model('Tool');

 var request = require('superagent');
/**
 * Globals
 */
 var user, tool;

/**
 * Unit tests
 */
 describe('Tool Model Unit Tests:', function() {
 	beforeEach(function(done) {

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
 		tool.save();

 		done();
 	});

 	describe('Method Save', function() {
 		it('should be able to save new tool without problems', function(done) {
 			return tool.save(function(err) {
 				should.not.exist(err);
 				done();
 			});
 		});
 	});

 	describe('Get all tools', function(){
 		it('should respond with json', function(done){
 			request.get('http://localhost:3000/api/tools')
 			.end(function(response){
 				response.status.should.equal(200);
 				response.should.have.header('Content-Type','/json/');
 			});
 			done();
 		});
 		it('should contain category field', function(done){
 			request.get('http://localhost:3000/api/tools')
 			.end(function(response){
 				response.status.should.equal(200);
 				response.body.should.have.property('category');
 			});
 			done();
 		});
 		it('should contain links field', function(done){
 			request.get('http://localhost:3000/api/tools')
 			.end(function(response){
 				response.status.should.equal(200);
 				response.body.should.have.property('links');
 			});
 			done();
 		});
 	});

 	describe('Get tools from incorrect route', function(){
 		it('should respond with error', function(done){
 			request.get('http://localhost:3000/api/toolsList')
 			.end(function(response){
 				response.status.should.equal(404);
 				response.should.have.header('Content-Type','/html/'); 				
 			});
 			done();
 		});
 	});

 	afterEach(function(done) { 
 		Tool.remove().exec();
 		done();
 	});
 });