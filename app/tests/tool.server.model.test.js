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
 			category: 'Test',
 			userGroups: ['hr','ebs'],
 			links: [
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

 describe('Method Save', function() {
 	it('should be able to save without problems', function(done) {
 		return tool.save(function(err) {
 			should.not.exist(err);
 			done();
 		});
 	});
 });

 describe('Create tool', function(){
 	it ('should return created tool', function(done){
 		request.post('http://localhost:3000/api/tools')
 		.send({
 			category: 'Test',
 			userGroups: ['test'],
 			links: [
 			{
 				name: 'PrimeTime',
 				description: 'primetime',
 				url: 'http://www.primetime.com',
 				userGroups: ['emp']
 			}]
 		})
 		.end(function(response){
 			response.status.should.equal(200);
 		});
 		done();
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

 describe('Create tool without required fields', function(){
 	it ('should respond with error', function(done){
 		request.post('http://localhost:3000/api/tools')
 		.send({
 			userGroups: ['test'],
 			links: [
 			{
 				name: 'PrimeTime',
 				description: 'primetime',
 				url: 'http://www.primetime.com',
 				userGroups: ['emp']
 			}]
 		})
 		.end(function(response){
 			response.status.should.equal(400);
 			response.should.have.property('error');
 		});
 		done();
 	});
 });

 describe('Add Link without Name', function(){
 	it ('should respond with error', function(done){
 		request.post('http://localhost:3000/api/addLink/Test')
 		.send({ 				
 			'links': 
 			{
 				'name': 'Test test',
 				'description': 'a place to go when you have questions!',
 				'url': 'http://insight.intuit.com',
 				'userGroups': ['ebs','manager']
 			}
 		})
 		.end(function(response){
 			response.status.should.equal(400);
 			response.should.have.property('error');
 		});
 		done();
 	});
 });

 describe('Add Link where Category does not exist', function(){
 	it ('should respond with error', function(done){
 		request.post('http://localhost:3000/api/addLink/NewTest')
 		.send({
 			'links': 
 			{
 				'name': 'Test test',
 				'description': 'a place to go when you have questions!',
 				'url': 'http://insight.intuit.com',
 				'userGroups': ['ebs','manager']
 			}
 		})
 		.end(function(response){
 			response.status.should.equal(204);
 		});
 		done();
 	});
 });

 describe('Get one tool', function(){
 	it('should respond with json', function(done){
 		request.get('http://localhost:3000/api/tool/Test')
 		.end(function(response){
 			response.status.should.equal(200);
 			response.should.have.header('Content-Type','/json/');
 		});
 		done();
 	});
 	it('should contain category field', function(done){
 		request.get('http://localhost:3000/api/tool/Test')
 		.end(function(response){
 			response.status.should.equal(200);
 			response.body.should.have.property('category');
 		});
 		done();
 	});
 	it('should contain links field', function(done){
 		request.get('http://localhost:3000/api/tool/Test')
 		.end(function(response){
 			response.status.should.equal(200);
 			response.body.should.have.property('links');
 		});
 		done();
 	});
 });

 afterEach(function(done) { 
 	Tool.remove().exec();

 	done();
 });
});