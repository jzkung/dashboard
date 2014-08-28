'use strict';

/**
 * Module dependencies.
 */
 var should = require('should'),
 request = require('superagent'),
 mongoose = require('mongoose'),
 _ = require('lodash'),
 User = mongoose.model('User'),
 Notification = mongoose.model('Notification');

 var request = require('superagent');
/**
 * Globals
 */
 var user, notification;

/**
 * Unit tests
 */
 describe('Notification Model Unit Tests:', function() {

 	var self = this;

 	beforeEach(function (done) {
 		notification = new Notification({
 			title: 'testTitle1',
 			description: 'Desc1',
 			startDate: null,
 			endDate: null,
 			userGroups: ['admin']
 		});

 		done();
 	});

 	describe('Method Save', function() {
 		it('should be able to save without problems', function(done) {
 			return notification.save(function(err) {
 				should.not.exist(err);
 				done();
 			});
 		});
 	});

 	describe('User not logged in', function (){
 		it('should fail when calling POST /api/notifications', function (done){
 			request.post('http://localhost:3000/api/notifications')
 			.send({
 				title: 'testTitle2',
 				description: 'Desc2',
 				startDate: null,
 				endDate: null,
 				userGroups: ['admin']
 			})
 			.end(function(response){
 				response.status.should.equal(401);
 				done();
 			});
 		});

 		it('should fail when calling POST /api/notifications and return error', function (done){
 			request.post('http://localhost:3000/api/notifications')
 			.send({
 				description: 'Desc2',
 				startDate: null,
 				endDate: null,
 				userGroups: ['admin']
 			})
 			.end(function(response){
 				response.status.should.equal(401);
 				response.should.have.property('error');
 				done();
 			});
 		});

 		it('should fail when calling GET /api/notifications and return error', function (done){
 			request.get('http://localhost:3000/api/notifications')
 			.end(function(response){
 				response.status.should.equal(401);
 				response.body.should.have.property('error');
 				done();
 			});	
 		});

 		it('should fail when calling GET /api/notifications and return error', function (done){
 			request.get('http://localhost:3000/api/notifications')
 			.end(function(response){
 				response.status.should.equal(401);
 				response.body.should.have.property('error');
 				done();
 			});
 		});

 		it('should fail when calling PUT /api/notifications', function (done){
 			request.put('http://localhost:3000/api/notifications')
 			.send({
 				title: 'TitleUpdate',
 				description: 'DescUpdate',
 				startDate: null,
 				endDate: null,
 				userGroups: ['admin']
 			})
 			.end(function(response){
 				response.status.should.equal(401);
 				done();
 			});
 		});

 		it('should fail when calling PUT /api/notifications and return error', function (done){
 			request.put('http://localhost:3000/api/notifications')
 			.end(function(response){
 				response.status.should.equal(401);
 				response.body.should.have.property('error');
 				done();
 			});
 		});
 	});


describe('Sign up user', function (){

	it('should sign up the user', function (done){
		request.post('http://localhost:3000/auth/signup')
		.send({'username':'testRohit1',
			'password':'tttt0000',
			'firstName':'Test',
			'lastName':'User',
			'email':'test@gmail.com',
			'role':'user'
		})
		.end(function (response){
			self.cookie = response.headers['set-cookie'];
			console.log('Got cookie as ' +  self.user);
			response.status.should.equal(200);
			done();
		});
	});
// });

// describe('Create notification with required fields', function (){
	it ('should return created notification', function(done){
		console.log( 'Calling create notification with cookie ' + self.cookie);
		request.post('http://localhost:3000/api/notifications')
		.set('cookie', self.cookie)
		.send({
			title: 'testTitle2',
			description: 'Desc2',
			startDate: null,
			endDate: null,
			userGroups: ['admin']
		})
		.set('cookie', self.cookie)
		.end(function (response){
			response.status.should.equal(200);
			done();
		});
	});
// });

// describe('Create notification without required fields', function (){
	it ('should respond with error', function(done){
		request.post('http://localhost:3000/api/notifications')
		.send({
			description: 'Desc2',
			startDate: null,
			endDate: null,
			userGroups: ['admin']
		})
		.set('cookie', self.cookie)
		.end(function (response){
			response.status.should.equal(400);
			response.should.have.property('error');
			done();
		});

	});
// });

// describe('Get notifications', function(){
	it('should respond with json', function(done){
		request.get('http://localhost:3000/api/notifications')
		.set('cookie', self.cookie)
		.end(function (response){
			response.status.should.equal(200);
			response.should.have.header('Content-Type','application/json');
			done();
		});
	});
	it('should contain title field', function(done){
		request.get('http://localhost:3000/api/notifications')
		.set('cookie', self.cookie)
		.end(function (response){
			response.status.should.equal(200);
			response.body[0].should.have.property('title');
			done();
		});
	});
// });

// describe('Update notification', function(){
	it('should be able to update without problems', function (done){
		request.put('http://localhost:3000/api/notifications')
		.send({
			title: 'testTitle2',
			description: 'DescUpdate',
			startDate: null,
			endDate: null,
			userGroups: ['admin']
		})
		.set('cookie', self.cookie)
		.end(function (response){
			response.status.should.equal(200);
			done();
		});
	});
// });

// describe('Delete notification', function (){
	it('Should be able to delete without any problems', function (done){

		Notification.find({'title' : 'testTitle2'}, function (docs){

 			console.log('====================================='+docs);
 	
		});
		request.get('http://localhost:3000/api/notifications')
		.send()
		request.del('http://localhost:3000/api/notifications')
		.send({'notificationId': '53fed2ea4b96430000b1bbd9'})
		.set('cookie', self.cookie) 
		.end(function (response){
			response.status.should.equal(200);
			done();
		});
	});
});



after(function(done) {
	console.log('Calling after in notification server model test');
	User.remove().exec();
	Notification.remove().exec();
	done();
});

// {'title': {$in :['testTitle1', 'testTitle2']}}   {'username':'testUser1'}
});










